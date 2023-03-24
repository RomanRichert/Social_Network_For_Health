package util;

import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import com.healyourself.ok_treatments.dto.StoryResponseDTO;
import com.healyourself.ok_treatments.dto.TherapyDTO;

import java.util.LinkedHashMap;
import java.util.Map;

import static util.EntityCreator.STORY;
import static util.EntityCreator.THERAPY;

public class DTOCreator {

    private final static Map<String, Double> BMI = Map.of(
            "weight", 77.0,
            "height", 1.81
    );

    private final static Map<Integer, Integer> SF36 = new LinkedHashMap<>();

    static {
        SF36.put(1, 1);
        SF36.put(2, 1);
        SF36.put(3, 1);
        SF36.put(4, 1);
        SF36.put(5, 1);
        SF36.put(6, 1);
        SF36.put(7, 1);
        SF36.put(8, 1);
        SF36.put(9, 1);
        SF36.put(10, 1);
        SF36.put(11, 1);
        SF36.put(12, 1);
        SF36.put(13, 1);
        SF36.put(14, 1);
        SF36.put(15, 1);
        SF36.put(16, 1);
        SF36.put(17, 1);
        SF36.put(18, 1);
        SF36.put(19, 1);
        SF36.put(20, 1);
        SF36.put(21, 1);
        SF36.put(22, 1);
        SF36.put(23, 1);
        SF36.put(24, 1);
        SF36.put(25, 1);
        SF36.put(26, 1);
        SF36.put(27, 1);
        SF36.put(28, 1);
        SF36.put(29, 1);
        SF36.put(30, 1);
        SF36.put(31, 1);
        SF36.put(32, 1);
        SF36.put(33, 1);
        SF36.put(34, 1);
        SF36.put(35, 1);
        SF36.put(36, 1);
    }

    public final static StoryResponseDTO STORY_RESPONSE_DTO = new StoryResponseDTO(
            STORY.getId().toString(),
            STORY.getAge(),
            STORY.getDescription(),
            STORY.getBodyPart().name(),
            STORY.getHealthScore(),
            STORY.getBmi(),
            STORY.getTherapies().stream().map(Object::toString).toList(),
            STORY.getComments().stream().map(Object::toString).toList()
    );

    public final static StoryRequestDTO STORY_REQUEST_DTO = new StoryRequestDTO(
            STORY.getAge(),
            STORY.getDescription(),
            STORY.getBodyPart().name(),
            BMI,
            SF36
    );

    public final static TherapyDTO THERAPY_DTO = new TherapyDTO(
            THERAPY.getName(),
            null,
            THERAPY.getSmiley()
    );
}