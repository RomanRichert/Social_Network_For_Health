package util;

import com.healyourself.ok_treatments.entity.Parameter;
import com.healyourself.ok_treatments.entity.Story;
import com.healyourself.ok_treatments.entity.Therapy;
import net.minidev.json.JSONObject;

import java.util.UUID;

import static com.healyourself.ok_treatments.enums.BodyPart.NECK;
import static com.healyourself.ok_treatments.enums.ParameterType.BMI;

public class EntityCreator {

    public final static Story STORY = new Story(
            27,
            "I'm just a poor tiny test story :(",
            NECK,
            24.50832472887535,
            23.503556057507403
    );

    public final static Therapy THERAPY = new Therapy(
            "Batoning",
            "Makes joy",
            4,
            STORY
    );

    public final static Parameter PARAMETER = new Parameter(
            UUID.fromString("94a91d1c-c9b1-11ed-afa1-0242ac120002"),
            new JSONObject(),
            BMI,
            STORY
    );
}