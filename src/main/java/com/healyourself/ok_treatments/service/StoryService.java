package com.healyourself.ok_treatments.service;

import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import com.healyourself.ok_treatments.dto.StoryResponseDTO;

import java.util.List;

public interface StoryService {

    StoryResponseDTO createStory(StoryRequestDTO story);

    List<StoryResponseDTO> getAllStories();

    StoryResponseDTO getStoryById(String id);

    void putVote(String id, String vote);
}