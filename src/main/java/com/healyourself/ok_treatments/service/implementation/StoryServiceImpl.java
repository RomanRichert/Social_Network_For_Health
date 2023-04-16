package com.healyourself.ok_treatments.service.implementation;

import com.healyourself.ok_treatments.converter.JSONConverter;
import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import com.healyourself.ok_treatments.dto.StoryResponseDTO;
import com.healyourself.ok_treatments.entity.*;
import com.healyourself.ok_treatments.enums.BodyPart;
import com.healyourself.ok_treatments.enums.VoteType;
import com.healyourself.ok_treatments.exception.StoryNotFoundException;
import com.healyourself.ok_treatments.mapper.StoryMapper;
import com.healyourself.ok_treatments.repository.StoryCommentRepository;
import com.healyourself.ok_treatments.repository.StoryRepository;
import com.healyourself.ok_treatments.repository.StoryVoteRepository;
import com.healyourself.ok_treatments.service.StoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

import static com.healyourself.ok_treatments.enums.ParameterType.BMI;
import static com.healyourself.ok_treatments.enums.ParameterType.SF36;
import static com.healyourself.ok_treatments.service.util.BMICalculator.calculateBmi;
import static com.healyourself.ok_treatments.service.util.RequestChecker.*;

@Service
@RequiredArgsConstructor
public class StoryServiceImpl implements StoryService {

    private final StoryRepository storyRepository;

    private final StoryMapper storyMapper;

    private final JSONConverter converter;

    private final StoryVoteRepository voteRepository;

    private final StoryCommentRepository commentRepository;

    @Override
    @Transactional
    public StoryResponseDTO createStory(StoryRequestDTO storyRequestDTO) {
        checkBMI(storyRequestDTO.getBmiAnswers().get("weight"), storyRequestDTO.getBmiAnswers().get("height"));
        String bodyPart = storyRequestDTO.getBodyPart().toUpperCase();
        checkBodyPart(bodyPart);

        Story story = storyMapper.toEntity(storyRequestDTO);
        story.setBodyPart(BodyPart.valueOf(bodyPart));

        story.addParameter(new Parameter(
                converter.convertToEntityAttribute(storyRequestDTO.getBmiAnswers().toString()),
                BMI,
                story
        ));

        story.addParameter(new Parameter(
                converter.convertToEntityAttribute(storyRequestDTO.getSf36Answers().toString()),
                SF36,
                story
        ));

        if (storyRequestDTO.getTherapies() != null && !storyRequestDTO.getTherapies().isEmpty()) {

            storyRequestDTO.getTherapies().forEach((therapyName, value) -> story.addTherapy(new Therapy(therapyName, null, value, story)));
        }

        return storyMapper.toDTO(storyRepository.save(story));
    }

    @Override
    public List<StoryResponseDTO> getAllStories() {
        return storyMapper.storiesToDTOs(storyRepository.findAll());
    }

    @Override
    public StoryResponseDTO getStoryById(String id) {
        return storyMapper.toDTO(storyRepository.findById(UUID.fromString(id)).orElseThrow(() -> new StoryNotFoundException(id)));
    }

    @Override
    @Transactional
    public String putVote(String id) {
        return voteRepository.save(
                new Vote(VoteType.SORRY, storyRepository.findById(UUID.fromString(id))
                        .orElseThrow(() -> new StoryNotFoundException(id))))
                .getId()
                .toString();
    }

    @Override
    public List<StoryResponseDTO> getSimilarStories(String storyId) {
        Story story = storyRepository.findById(UUID.fromString(storyId)).orElseThrow(() -> new StoryNotFoundException(storyId));
        return storyMapper.storiesToDTOs(storyRepository.findSimilarStoriesByRequestedParams(
                story.getAge() - 6,
                story.getAge() + 6,
                story.getBodyPart(),
                story.getHealthScore() - 5,
                story.getHealthScore() + 5,
                story.getBmi() - 3,
                story.getBmi() + 3
        ));
    }

    @Override
    public List<StoryResponseDTO> getSimilarStories(int age, double weight, double height, String bodyPart) {
        checkBMI(weight, height);
        double bmi = calculateBmi(weight, height);

        return storyMapper.storiesToDTOs(storyRepository.findSimilarStoriesByOriginalStoryId(
                age - 6,
                age + 6,
                BodyPart.valueOf(bodyPart),
                bmi - 3,
                bmi + 3
        ));
    }

    @Override
    @Transactional
    public void commentStory(String id, String comment) {
        commentRepository.save(new Comment(comment, storyRepository.findById(UUID.fromString(id)).orElseThrow(() -> new StoryNotFoundException(id))));
    }

    @Override
    @Transactional
    public void deleteVote(String voteId) {
        voteRepository.deleteById(UUID.fromString(voteId));
    }
}