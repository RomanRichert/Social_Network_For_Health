package com.healyourself.ok_treatments.exception;

import static com.healyourself.ok_treatments.exception.messages.ErrorMessage.INVALID_BMI_VALUES;

public class InvalidBMIValueException extends BadRequestException {

    public InvalidBMIValueException() {
        super(INVALID_BMI_VALUES.getMessage());
    }
}