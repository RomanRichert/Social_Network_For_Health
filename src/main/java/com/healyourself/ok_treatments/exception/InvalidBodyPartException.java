package com.healyourself.ok_treatments.exception;

import static com.healyourself.ok_treatments.exception.messages.ErrorMessage.INVALID_BODY_PART;

public class InvalidBodyPartException extends BadRequestException {

    public InvalidBodyPartException(String bodyPart) {
        super(bodyPart + INVALID_BODY_PART.getMessage());
    }
}