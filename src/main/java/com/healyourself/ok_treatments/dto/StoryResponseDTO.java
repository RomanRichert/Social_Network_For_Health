package com.healyourself.ok_treatments.dto;

import lombok.Value;

import java.util.List;

@Value
public class StoryResponseDTO {

    String id;

    String description;

    String bodyPart;

    String healthScore;

    String bmi;

    List<String> therapies;

    List<String> comments;
}