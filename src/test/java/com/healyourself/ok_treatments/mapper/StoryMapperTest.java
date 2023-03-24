package com.healyourself.ok_treatments.mapper;

import com.healyourself.ok_treatments.entity.Story;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static util.DTOCreator.STORY_REQUEST_DTO;
import static util.DTOCreator.STORY_RESPONSE_DTO;
import static util.EntityCreator.STORY;

@ExtendWith(MockitoExtension.class)
@DisplayName("Test class for StoryMapper")
class StoryMapperTest {

    @Spy
    TherapyMapper therapyMapper = new TherapyMapperImpl();

    @InjectMocks
    StoryMapper storyMapper = new StoryMapperImpl();

    @Test
    @DisplayName("Testing of mapping of a StoryRequestDTO to Story")
    void toEntity() {
        Story actual = storyMapper.toEntity(STORY_REQUEST_DTO);
        actual.setId(STORY.getId());
        assertEquals(STORY, actual, "Something went wrong by mapping StoryRequestDTO to Story");
    }

    @Test
    @DisplayName("Testing of mapping of a Story to StoryRequestDTO")
    void toDTO() {
        assertEquals(STORY_RESPONSE_DTO, storyMapper.toDTO(STORY), "Something went wrong by mapping Story to StoryRequestDTO");
    }

    @Test
    @DisplayName("Testing of mapping List<Story> to List<StoryResponseDTO>")
    void storiesToDTOs() {
        assertEquals(List.of(STORY_RESPONSE_DTO), storyMapper.storiesToDTOs(List.of(STORY)), "Something went wrong mapping List<Story> to List<StoryResponseDTO>");
    }
}