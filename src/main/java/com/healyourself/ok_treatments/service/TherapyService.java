package com.healyourself.ok_treatments.service;

import com.healyourself.ok_treatments.dto.TherapyDTO;

import java.util.List;

public interface TherapyService {
    TherapyDTO createTherapy(TherapyDTO therapyDTO, String storyId);

    TherapyDTO getTherapyByName(String name);

    List<String> getAllTherapies();
}