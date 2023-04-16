package com.healyourself.ok_treatments.dto;

import jakarta.annotation.Nullable;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Value;

@Value
public class TherapyDTO {

    String name;

    @Nullable
    @Min(value = 0, message = "Smiley-value should be between 0 and 4")
    @Max(value = 4, message = "Smiley-value should be between 0 and 4")
    Integer smiley;
}