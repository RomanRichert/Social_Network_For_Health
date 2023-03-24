package com.healyourself.ok_treatments.controller;

import com.healyourself.ok_treatments.dto.StoryResponseDTO;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import lombok.RequiredArgsConstructor;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.healyourself.ok_treatments.entity.Story;
import com.healyourself.ok_treatments.service.StoryService;
import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import util.DTOCreator;

import java.util.List;
import java.util.UUID;

import static com.healyourself.ok_treatments.util.DtoCreator.calculateBmi;
import static com.healyourself.ok_treatments.util.DtoCreator.getPatchingRequestDTO;

import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc
@ExtendWith(MockitoExtension.class)
@WebMvcTest(StoryController.class)
class StoryControllerTest {

    @Mock // заглушаем работу с базой данных
    private StoryService storyService;

    @Autowired
    MockMvc mockMvc;

    @Test
    public void testCreateStory() throws Exception {
        mockMvc.perform(post("/story")
                        .content(new ObjectMapper().writeValueAsString(DTOCreator.STORY_RESPONSE_DTO))
                        .contentType(APPLICATION_JSON)
                        .accept(APPLICATION_JSON))
                .andExpect(status().isCreated());
    }


    @Test
    public void testGetAllStories() throws Exception {
        Story story = new Story();
        story.setId(UUID.fromString("Test story")); // мы сами сделали одну запись
        Mockito.when(storyService.getAllStories()).thenReturn(List.of(storyService));
       // TODO get
        mockMvc.perform(get("/story") // perform - выполнить
                        .accept(APPLICATION_JSON))
                .andDo(print()) // напечатай ответ в формате JSON
                .andExpect(status().isOk()) // если ответ ок - тест пройден!
                .andExpect(jsonPath("$", Matchers.hasSize(1))) // сколько записей нам пришло в качестве ответа(у нас одна)
                .andExpect(jsonPath("$[0].name", Matchers.is("Test story"))); // читаем имя нулевой записи. Имя "Test story"
    }

    @Test
    void getStory() {
    }

    @Test
    void reactToStory() {
    }

    @Test
    void getSimilarStoriesById() {
    }

    @Test
    void getSimilarStoriesByRequestedParams() {
    }

    @Test
    void commentStory() {
    }
}