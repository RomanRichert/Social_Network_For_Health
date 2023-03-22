package com.healyourself.ok_treatments.service.implementation;

import com.healyourself.ok_treatments.dto.TherapyDTO;
import com.healyourself.ok_treatments.mapper.TherapyMapper;
import com.healyourself.ok_treatments.repository.TherapyRepository;
import com.healyourself.ok_treatments.service.TherapyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TherapyServiceImpl implements TherapyService {

    private final TherapyMapper therapyMapper;

    private final TherapyRepository therapyRepository;

    @Override
    public TherapyDTO createTherapy(TherapyDTO therapyDTO) {
        return therapyMapper.toDto(therapyRepository.save(therapyMapper.toEntity(therapyDTO)));
    }

    @Override
    public TherapyDTO getTherapyByName(String name) {
        return therapyMapper.toDto(therapyRepository.findByNameIgnoreCase(name));
    }

    @Override
    public List<String> getAllTherapies() {
        return therapyMapper.getNamesFromTherapies(therapyRepository.findAll());
    }
}