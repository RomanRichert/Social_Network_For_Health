package com.healyourself.ok_treatments.service.implementation;

import com.healyourself.ok_treatments.entity.Therapy;
import com.healyourself.ok_treatments.mapper.TherapyMapper;
import com.healyourself.ok_treatments.mapper.TherapyMapperImpl;
import com.healyourself.ok_treatments.repository.StoryRepository;
import com.healyourself.ok_treatments.repository.TherapyRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static util.DTOCreator.THERAPY_DTO;
import static util.EntityCreator.*;

@ExtendWith(MockitoExtension.class)
@DisplayName("Test class for TherapyServiceImpl")
class TherapyServiceImplTest {

    @Spy
    TherapyMapper therapyMapper = new TherapyMapperImpl();

    @Mock
    TherapyRepository therapyRepository;

    @Mock
    StoryRepository storyRepository;

    @InjectMocks
    TherapyServiceImpl therapyService;

    @Test
    @DisplayName("Testing of creating of a therapy")
    void createTherapy() {
        when(therapyRepository.save(any(Therapy.class))).thenReturn(THERAPY);
        when(storyRepository.findById(UUID.fromString(ID))).thenReturn(Optional.of(STORY));

        assertEquals(THERAPY_DTO, therapyService.createTherapy(THERAPY_DTO, ID), "TherapyDTOs should be equal");
    }

    @Test
    @DisplayName("Testing of getting a therapy by name")
    void getTherapyByName() {
        when(therapyRepository.findByNameIgnoreCase(THERAPY_NAME)).thenReturn(Optional.of(THERAPY));

        assertEquals(THERAPY_DTO, therapyService.getTherapyByName(THERAPY_NAME), "TherapyDTOs should be equal");
    }

    @Test
    @DisplayName("Testing of getting of all therapies")
    void getAllTherapies() {
        List<String> therapiesNames = Stream.of(THERAPY).map(Therapy::getName).toList();
        when(therapyRepository.findAll()).thenReturn(List.of(THERAPY));

        assertEquals(therapiesNames, therapyService.getAllTherapies(), "Names of the therapies should be equal");
    }
}