package com.healyourself.ok_treatments.service.implementation;

import com.healyourself.ok_treatments.converter.JSONConverter;
import com.healyourself.ok_treatments.mapper.StoryMapper;
import com.healyourself.ok_treatments.mapper.StoryMapperImpl;
import com.healyourself.ok_treatments.repository.StoryRepository;
import com.healyourself.ok_treatments.repository.StoryVoteRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class StoryServiceImplTest {

    @Mock
    private StoryRepository storyRepository;

    private StoryMapper storyMapper = new StoryMapperImpl();

    private JSONConverter converter;

    private StoryVoteRepository voteRepository;

    private StoryServiceImpl storyService;

    @Test
    void createStory() {
    }

    @Test
    void getAllStories() {
    }

    @Test
    void getStoryById() {
    }

    @Test
    void putVote() {
    }

    @Test
    void getSimilarStories() {
    }

    @Test
    void testGetSimilarStories() {
    }

    @Test
    void commentStory() {
    }
}