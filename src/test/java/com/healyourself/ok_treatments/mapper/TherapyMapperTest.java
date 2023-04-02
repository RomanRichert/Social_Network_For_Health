package com.healyourself.ok_treatments.mapper;

import com.healyourself.ok_treatments.entity.Therapy;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.*;
import static com.healyourself.ok_treatments.util.DTOCreator.THERAPY_DTO;
import static com.healyourself.ok_treatments.util.EntityCreator.ID;
import static com.healyourself.ok_treatments.util.EntityCreator.THERAPY;

@DisplayName("Test class for TherapyMapper")
class TherapyMapperTest {

    TherapyMapper therapyMapper = new TherapyMapperImpl();

    @Test
    @DisplayName("Testing of mapping of a TherapyDTO to Therapy")
    void toEntity() {
        Therapy actual = therapyMapper.toEntity(THERAPY_DTO);
        actual.setId(UUID.fromString(ID));
        assertEquals(THERAPY, actual, "Something went wrong by mapping TherapyDTO to Therapy");
    }

    @Test
    @DisplayName("Testing of mapping of a TherapyDTO to Therapy")
    void toDto() {
        assertEquals(THERAPY_DTO, therapyMapper.toDto(THERAPY), "Something went wrong by mapping Therapy to TherapyDTO");
    }

    @Test
    void getNamesFromTherapies() {
        List<String> therapiesNames = Stream.of(THERAPY).map(Therapy::getName).toList();
        assertEquals(therapiesNames, therapyMapper.getNamesFromTherapies(List.of(THERAPY)), "Something went wrong by getting names from the therapies");
    }
}