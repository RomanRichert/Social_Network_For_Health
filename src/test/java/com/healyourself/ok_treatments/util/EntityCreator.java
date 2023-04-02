package com.healyourself.ok_treatments.util;

import com.healyourself.ok_treatments.entity.Parameter;
import com.healyourself.ok_treatments.entity.Story;
import com.healyourself.ok_treatments.entity.Therapy;
import net.minidev.json.JSONObject;

import java.util.UUID;

import static com.healyourself.ok_treatments.enums.BodyPart.NECK;
import static com.healyourself.ok_treatments.enums.ParameterType.BMI;

public class EntityCreator {

    public final static String THERAPY_NAME = "Batoning";

    public final static String ID = "97d99b36-c99f-11ed-afa1-0242ac120002";

    public final static Story STORY = new Story(
            27,
            "I'm just a poor tiny test story :(",
            NECK,
            24.50832472887535,
            23.503556057507403
    );

    static {
        STORY.setId(UUID.fromString(ID));
    }

    public final static Therapy THERAPY = new Therapy(
            THERAPY_NAME,
            null,
            4,
            STORY
    );

    static {
        THERAPY.setId(UUID.fromString(ID));
    }

    public final static Parameter PARAMETER = new Parameter(
            UUID.fromString("94a91d1c-c9b1-11ed-afa1-0242ac120002"),
            new JSONObject(),
            BMI,
            STORY
    );
}