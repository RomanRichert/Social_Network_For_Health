package com.healyourself.ok_treatments.service.implementation;

import com.healyourself.ok_treatments.converter.JSONConverter;
import com.healyourself.ok_treatments.entity.Story;
import com.healyourself.ok_treatments.mapper.StoryMapper;
import com.healyourself.ok_treatments.mapper.StoryMapperImpl;
import com.healyourself.ok_treatments.mapper.TherapyMapper;
import com.healyourself.ok_treatments.mapper.TherapyMapperImpl;
import com.healyourself.ok_treatments.repository.StoryRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static com.healyourself.ok_treatments.util.DTOCreator.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static com.healyourself.ok_treatments.util.EntityCreator.ID;
import static com.healyourself.ok_treatments.util.EntityCreator.STORY;

@ExtendWith(MockitoExtension.class)
@DisplayName("Test class for StoryServiceImpl")
class StoryServiceImplTest {

    @Mock
    private StoryRepository storyRepository;

    @Mock
    private StoryMapper storyMapper = new StoryMapperImpl();

    @Spy
    private TherapyMapper therapyMapper = new TherapyMapperImpl();

    @Spy
    private JSONConverter converter;

    @InjectMocks
    private StoryServiceImpl storyService;

    @Test
    @DisplayName("Testing of creating of a story")
    void createStory() {
        when(storyRepository.save(any(Story.class))).thenReturn(STORY);
        when(storyMapper.toDTO(STORY)).thenReturn(STORY_RESPONSE_DTO);
        when(storyMapper.toEntity(STORY_REQUEST_DTO)).thenReturn(STORY);

        assertEquals(STORY_RESPONSE_DTO, storyService.createStory(STORY_REQUEST_DTO), "StoryResponseDTOs should be equal");
        verify(storyRepository).save(any(Story.class));
    }

    @Test
    @DisplayName("Testing of getting of all stories")
    void getAllStories() {
        when(storyRepository.findAll()).thenReturn(List.of(STORY));
        when(storyMapper.storiesToDTOs(List.of(STORY))).thenReturn(List.of(STORY_RESPONSE_DTO));

        assertEquals(List.of(STORY_RESPONSE_DTO), storyService.getAllStories(), "Lists should be equal");
        verify(storyRepository).findAll();
    }

    @Test
    @DisplayName("Testing of getting of a story by id")
    void getStoryById() {
        when(storyRepository.findById(UUID.fromString(ID))).thenReturn(Optional.of(STORY));
        when(storyMapper.toDTO(STORY)).thenReturn(STORY_RESPONSE_DTO);

        assertEquals(STORY_RESPONSE_DTO, storyService.getStoryById(ID), "StoryResponseDTOs should be equal");
        verify(storyRepository).findById(UUID.fromString(ID));
    }
}