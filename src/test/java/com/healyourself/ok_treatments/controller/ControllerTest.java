package com.healyourself.ok_treatments.controller;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class ControllerTest {

    // Тест проверки подключения контроллеров!
    @Autowired
    ExceptionHandlerController exceptionHandlerController;

    @Autowired
    StoryController storyController;

    @Autowired
    TherapyController therapyController;

    @Test
    public void exceptionHandlerControllerTest() {
        Assertions.assertNotEquals(exceptionHandlerController, null);
    }

    @Test
    public void storyControllerTest() {
        Assertions.assertNotEquals(storyController, null);
    }

    @Test
    public void therapyControllerTest() {
        Assertions.assertNotEquals(therapyController, null);
    }

}

