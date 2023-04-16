package com.healyourself.ok_treatments.mapper;

import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import com.healyourself.ok_treatments.dto.StoryResponseDTO;
import com.healyourself.ok_treatments.entity.Story;
import com.healyourself.ok_treatments.service.util.BMICalculator;
import com.healyourself.ok_treatments.service.util.HealthScoreCalculator;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring",
        uses = {TherapyMapper.class, CommentMapper.class, VoteMapper.class},
        imports = {HealthScoreCalculator.class, BMICalculator.class})
public interface StoryMapper {

    @Mapping(target = "healthScore", expression = "java(HealthScoreCalculator.calculateHealthScore(storyRequestDTO))")
    @Mapping(target = "bmi", expression = "java(BMICalculator.calculateBmi(storyRequestDTO))")
    @Mapping(target = "comments", ignore = true)
    @Mapping(target = "therapies", ignore = true)
    Story toEntity(StoryRequestDTO storyRequestDTO);

    StoryResponseDTO toDTO(Story story);

    List<StoryResponseDTO> storiesToDTOs(List<Story> stories);
}