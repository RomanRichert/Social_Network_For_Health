package com.healyourself.ok_treatments.service;

import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import com.healyourself.ok_treatments.dto.StoryResponseDTO;

public interface StoryService {
    StoryResponseDTO saveStory(StoryRequestDTO story);
}