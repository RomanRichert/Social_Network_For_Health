package com.healyourself.ok_treatments.service.implementation;

import com.healyourself.ok_treatments.dto.TherapyDTO;
import com.healyourself.ok_treatments.entity.Therapy;
import com.healyourself.ok_treatments.exception.StoryNotFoundException;
import com.healyourself.ok_treatments.exception.TherapyNotFoundException;
import com.healyourself.ok_treatments.mapper.TherapyMapper;
import com.healyourself.ok_treatments.repository.StoryRepository;
import com.healyourself.ok_treatments.repository.TherapyRepository;
import com.healyourself.ok_treatments.service.TherapyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TherapyServiceImpl implements TherapyService {

    private final TherapyMapper therapyMapper;

    private final TherapyRepository therapyRepository;

    private final StoryRepository storyRepository;

    @Override
    public TherapyDTO createTherapy(TherapyDTO therapyDTO, String storyId) {
        Therapy therapy = therapyMapper.toEntity(therapyDTO);
        therapy.setStory(storyRepository.findById(UUID.fromString(storyId)).orElseThrow(() -> new StoryNotFoundException(storyId)));

        return therapyMapper.toDto(therapyRepository.save(therapy));
    }

    @Override
    public TherapyDTO getTherapyByName(String name) {
        return therapyMapper.toDto(therapyRepository.findByNameIgnoreCase(name).orElseThrow(() -> new TherapyNotFoundException(name)));
    }

    @Override
    public List<String> getAllTherapies() {
        return therapyMapper.getNamesFromTherapies(therapyRepository.findAll());
    }
}