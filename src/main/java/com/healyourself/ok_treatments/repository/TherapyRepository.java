package com.healyourself.ok_treatments.repository;

import com.healyourself.ok_treatments.entity.Therapy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TherapyRepository extends JpaRepository<Therapy, UUID> {
    Therapy findByNameIgnoreCase(String name);
}
