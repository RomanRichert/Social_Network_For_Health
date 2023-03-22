package com.healyourself.ok_treatments.repository;

import com.healyourself.ok_treatments.entity.Story;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StoryRepository extends JpaRepository<Story, UUID> {
}
