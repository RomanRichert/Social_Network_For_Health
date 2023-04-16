package com.healyourself.ok_treatments.repository;

import com.healyourself.ok_treatments.entity.Parameter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface StoryParameterRepository extends JpaRepository<Parameter, UUID> {
}