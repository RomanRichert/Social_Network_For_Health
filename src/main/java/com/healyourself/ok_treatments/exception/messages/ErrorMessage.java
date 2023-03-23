package com.healyourself.ok_treatments.exception.messages;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum ErrorMessage {
    THERAPY_NOT_FOUND("Therapy not found. Name = "),
    STORY_NOT_FOUND("Story not found. id = ");

    private final String message;
}