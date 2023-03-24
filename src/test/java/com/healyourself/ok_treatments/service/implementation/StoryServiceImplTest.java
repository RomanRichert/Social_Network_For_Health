package com.healyourself.ok_treatments.service.implementation;

import com.healyourself.ok_treatments.converter.JSONConverter;
import com.healyourself.ok_treatments.repository.StoryRepository;
import com.healyourself.ok_treatments.repository.StoryVoteRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class StoryServiceImplTest {

    @Mock
    private StoryRepository storyRepository;

    @Spy
//    private StoryMapper storyMapper = new StoryMapperImpl();


    private JSONConverter converter;

    private StoryVoteRepository voteRepository;

    @InjectMocks
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