package com.healyourself.ok_treatments.service.implementation;

import com.healyourself.ok_treatments.converter.JSONConverter;
import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import com.healyourself.ok_treatments.dto.StoryResponseDTO;
import com.healyourself.ok_treatments.entity.Parameter;
import com.healyourself.ok_treatments.entity.Story;
import com.healyourself.ok_treatments.entity.Vote;
import com.healyourself.ok_treatments.enums.VoteType;
import com.healyourself.ok_treatments.mapper.StoryMapper;
import com.healyourself.ok_treatments.repository.StoryRepository;
import com.healyourself.ok_treatments.repository.StoryVoteRepository;
import com.healyourself.ok_treatments.service.StoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

import static com.healyourself.ok_treatments.enums.ParameterType.BMI;
import static com.healyourself.ok_treatments.enums.ParameterType.SF36;

@Service
@RequiredArgsConstructor
public class StoryServiceImpl implements StoryService {

    private final StoryRepository storyRepository;

    private final StoryMapper storyMapper;

    private final JSONConverter converter;

    private final StoryVoteRepository voteRepository;

    @Override
    public StoryResponseDTO createStory(StoryRequestDTO storyRequestDTO) {
        Story story = storyMapper.toEntity(storyRequestDTO);
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

        return storyMapper.toDTO(storyRepository.save(story));
    }

    @Override
    public List<StoryResponseDTO> getAllStories() {
        return storyMapper.storiesToDTOs(storyRepository.findAll());
    }

    @Override
    public StoryResponseDTO getStoryById(String id) {
        return storyMapper.toDTO(storyRepository.findById(UUID.fromString(id)).orElseThrow(() -> new RuntimeException()));
    }

    @Override
    public void putVote(String id, String vote) {
        voteRepository.save(new Vote(VoteType.valueOf(vote), storyRepository.findById(UUID.fromString(id)).orElseThrow(() -> new RuntimeException())));
    }

    public static double calculateBmi(StoryRequestDTO story) {
        double weight = story.getBmiAnswers().get("weight");
        double height = story.getBmiAnswers().get("height");

        return weight / Math.pow(height, 2);
    }
}