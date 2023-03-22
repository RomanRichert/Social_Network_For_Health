package com.healyourself.ok_treatments.dto;

import lombok.Value;

import java.util.Map;

@Value
public class StoryRequestDTO {

    String description;

    String bodyPart;

    Integer smile;

    Map<String, Double> bmiAnswers;

    Map<Integer, Integer> sf36Answers;
}