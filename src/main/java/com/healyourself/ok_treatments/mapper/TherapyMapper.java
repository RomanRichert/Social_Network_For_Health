package com.healyourself.ok_treatments.mapper;

import com.healyourself.ok_treatments.entity.Therapy;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface TherapyMapper {

    static String toString(Therapy therapy) {
        return therapy.toString();
    }
}
