package com.healyourself.ok_treatments.exception;

import static com.healyourself.ok_treatments.exception.messages.ErrorMessage.THERAPY_NOT_FOUND;

public class TherapyNotFoundException extends EntityNotFoundException {

    public TherapyNotFoundException(String name) {
        super(THERAPY_NOT_FOUND.getMessage()+name);
    }
}