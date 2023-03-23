package com.healyourself.ok_treatments.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Value;

import java.util.Map;

@Value
public class StoryRequestDTO {

    @Min(value = 1, message = "Age should be between 1 and 122")
    @Max(value = 122, message = "Age should be between 1 and 122")
    int age;

    String description;

    String bodyPart;

    Map<String, Double> bmiAnswers;

    Map<Integer, Integer> sf36Answers;
}