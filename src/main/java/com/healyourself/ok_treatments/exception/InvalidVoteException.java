package com.healyourself.ok_treatments.exception;

import static com.healyourself.ok_treatments.exception.messages.ErrorMessage.INVALID_VOTE;

public class InvalidVoteException extends BadRequestException {

    public InvalidVoteException(String vote) {
        super(vote + INVALID_VOTE.getMessage());
    }
}