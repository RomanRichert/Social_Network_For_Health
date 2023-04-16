package com.healyourself.ok_treatments.service;

import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import com.healyourself.ok_treatments.dto.StoryResponseDTO;

import java.util.List;

public interface StoryService {

    StoryResponseDTO createStory(StoryRequestDTO story);

    List<StoryResponseDTO> getAllStories();

    StoryResponseDTO getStoryById(String id);

    String putVote(String id);

    List<StoryResponseDTO> getSimilarStories(String storyId);

    List<StoryResponseDTO> getSimilarStories(int age, double weight, double height, String bodyPart);

    void commentStory(String id, String comment);

    void deleteVote(String voteId);
}