package com.healyourself.ok_treatments.dto;

import lombok.Value;

import java.util.Map;

@Value
public class StoryRequestDTO {
    int age;

    String description;

    String bodyPart;

    Map<String, Double> bmiAnswers;

    Map<Integer, Integer> sf36Answers;
}