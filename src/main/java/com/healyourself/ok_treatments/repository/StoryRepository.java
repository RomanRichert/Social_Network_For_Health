package com.healyourself.ok_treatments.repository;

import com.healyourself.ok_treatments.entity.Story;
import com.healyourself.ok_treatments.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Repository
public interface StoryRepository extends JpaRepository<Story, UUID> {
    @Transactional
    @Modifying
    @Query("update Story s set s.votes = ?1 where s.id = ?2")
    void updateVotesById(Vote votes, UUID id);
}
