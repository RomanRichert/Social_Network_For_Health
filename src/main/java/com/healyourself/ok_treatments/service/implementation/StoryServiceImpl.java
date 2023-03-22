package com.healyourself.ok_treatments.service.implementation;

import com.healyourself.ok_treatments.converter.JSONConverter;
import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import com.healyourself.ok_treatments.dto.StoryResponseDTO;
import com.healyourself.ok_treatments.mapper.StoryMapper;
import com.healyourself.ok_treatments.repository.StoryRepository;
import com.healyourself.ok_treatments.service.StoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class StoryServiceImpl implements StoryService {

    private final StoryRepository storyRepository;

    private final StoryMapper storyMapper;


    @Override
    public StoryResponseDTO saveStory(StoryRequestDTO story) {
        return storyMapper.toDTO(storyRepository.save(storyMapper.toEntity(story)));
    }

    public static double calculateBmi(StoryRequestDTO story) {
        double weight = story.getBmiAnswers().get("weight");
        double height = story.getBmiAnswers().get("height");

        return weight / Math.sqrt(height);
    }

}