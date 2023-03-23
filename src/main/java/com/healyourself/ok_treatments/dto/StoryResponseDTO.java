package com.healyourself.ok_treatments.dto;

import lombok.Value;

import java.util.List;

@Value
public class StoryResponseDTO {

    String id;

    int age;

    String description;

    double bodyPart;

    double healthScore;

    String bmi;

    List<String> therapies;

    List<String> comments;
}