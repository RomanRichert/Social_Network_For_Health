package com.healyourself.ok_treatments.controller;

import com.healyourself.ok_treatments.service.TherapyService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

@AutoConfigureMockMvc
@ExtendWith(MockitoExtension.class)
@WebMvcTest(StoryController.class)
class TherapyControllerTest {

    @Mock // заглушаем работу с базой данных
    private TherapyService therapyService;

    @Test
    void createTherapy() {
    }

    @Test
    void getTherapy() {
    }

    @Test
    void getAllTherapies() {
    }
}