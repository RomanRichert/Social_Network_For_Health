package com.healyourself.ok_treatments.service.util;

import com.healyourself.ok_treatments.enums.BodyPart;
import com.healyourself.ok_treatments.enums.VoteType;
import com.healyourself.ok_treatments.exception.InvalidBMIValueException;
import com.healyourself.ok_treatments.exception.InvalidBodyPartException;
import com.healyourself.ok_treatments.exception.InvalidVoteException;
import lombok.experimental.UtilityClass;

import java.util.Objects;
import java.util.stream.Stream;

@UtilityClass
public class RequestChecker {

    public static void checkBMI(double weight, double height) {
        if (weight < 2.1 || weight > 635.0) throw new InvalidBMIValueException();
        if (height < 0.65 || height > 2.51) throw new InvalidBMIValueException();
    }

    public static void checkVote(String vote) {
        if (!Stream.of((VoteType.values())).map(Objects::toString).toList().contains(vote))
            throw new InvalidVoteException(vote);
    }

    public static void checkBodyPart(String bodyPart) {
        if (!Stream.of((BodyPart.values())).map(Objects::toString).toList().contains(bodyPart))
            throw new InvalidBodyPartException(bodyPart);
    }
}