package com.healyourself.ok_treatments.repository;

import com.healyourself.ok_treatments.entity.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StoryParameterRepository extends JpaRepository<Parameter, UUID> {
}