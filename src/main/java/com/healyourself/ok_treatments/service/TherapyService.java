package com.healyourself.ok_treatments.service;

import com.healyourself.ok_treatments.dto.TherapyDTO;

import java.util.List;

public interface TherapyService {
    TherapyDTO createTherapy(TherapyDTO therapyDTO);

    TherapyDTO getTherapyByName(String name);

    List<String> getAllTherapies();
}