package com.healyourself.ok_treatments.mapper;

import com.healyourself.ok_treatments.dto.TherapyDTO;
import com.healyourself.ok_treatments.entity.Therapy;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.Set;

@Mapper(componentModel = "spring")
public interface TherapyMapper {

    Therapy toEntity(TherapyDTO therapyDTO);

    TherapyDTO toDto(Therapy therapy);

    List<TherapyDTO> therapiesToDTOs(List<Therapy> therapies);

    Set<String> getNamesFromTherapies(Set<Therapy> therapy);

    static String getNames(Therapy therapy) {
        return therapy.getName();
    }
}