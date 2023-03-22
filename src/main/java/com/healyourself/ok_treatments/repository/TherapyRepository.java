package com.healyourself.ok_treatments.repository;

import com.healyourself.ok_treatments.entity.Therapy;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface TherapyRepository extends JpaRepository<Therapy, UUID> {
}
