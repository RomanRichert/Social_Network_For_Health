package com.healyourself.ok_treatments.repository;

import com.healyourself.ok_treatments.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface StoryVoteRepository extends JpaRepository<Vote, UUID> {
}