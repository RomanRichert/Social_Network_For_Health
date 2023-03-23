package com.healyourself.ok_treatments.service.util;

import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import lombok.experimental.UtilityClass;

@UtilityClass
public class BMICalculator {

    public static double calculateBmi(StoryRequestDTO story) {
        double weight = story.getBmiAnswers().get("weight");
        double height = story.getBmiAnswers().get("height");

        return weight / Math.pow(height, 2);
    }

    public static double calculateBmi(double weight, double height) {
        return weight / Math.pow(height, 2);
    }
}