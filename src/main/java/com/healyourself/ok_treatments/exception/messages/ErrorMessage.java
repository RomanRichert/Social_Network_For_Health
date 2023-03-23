package com.healyourself.ok_treatments.exception.messages;

import lombok.AllArgsConstructor;
import lombok.Getter;

import static com.healyourself.ok_treatments.enums.BodyPart.*;
import static com.healyourself.ok_treatments.enums.VoteType.ADMIRE;
import static com.healyourself.ok_treatments.enums.VoteType.SORRY;

@Getter
@AllArgsConstructor
public enum ErrorMessage {
    INVALID_BMI_VALUES("If that is really you weight/height, than I have bad news for you... I think you're dying"),
    INVALID_BODY_PART(" this body part isn't available. Available types: " + HEAD + ", " + LEFT_ARM + ", "
            + RIGHT_ARM + ", " + LEFT_SHOULDER + ", " + RIGHT_SHOULDER + ", " + LEFT_LEG + ", " + RIGHT_LEG + ", "
            + NECK + ", " + BACK + ", " + LOWER_BACK),
    INVALID_VOTE(" this vote type doesn't exist. Available types: " + SORRY + ", " + ADMIRE),
    THERAPY_NOT_FOUND("Therapy not found. Name = "),
    STORY_NOT_FOUND("Story not found. id = ");

    private final String message;
}