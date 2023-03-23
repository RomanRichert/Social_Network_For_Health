package com.healyourself.ok_treatments.mapper;

import com.healyourself.ok_treatments.dto.TherapyDTO;
import com.healyourself.ok_treatments.entity.Therapy;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface TherapyMapper {

    Therapy toEntity(TherapyDTO therapyDTO);

    TherapyDTO toDto(Therapy therapy);

    List<String> getNamesFromTherapies(List<Therapy> therapy);

    static String toString(Therapy therapy) {
        return therapy.getName();
    }
}