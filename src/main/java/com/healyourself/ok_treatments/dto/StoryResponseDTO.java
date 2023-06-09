package com.healyourself.ok_treatments.dto;

import lombok.Value;

import java.util.List;

@Value
public class StoryResponseDTO {

    String id;

    int age;

    String description;

    String bodyPart;

    double healthScore;

    double bmi;

    List<TherapyDTO> therapies;

    List<String> comments;

    Integer votes;
}