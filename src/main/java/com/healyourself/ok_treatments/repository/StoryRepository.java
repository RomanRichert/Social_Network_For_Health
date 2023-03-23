package com.healyourself.ok_treatments.repository;

import com.healyourself.ok_treatments.entity.Story;
import com.healyourself.ok_treatments.entity.Vote;
import com.healyourself.ok_treatments.enums.BodyPart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Repository
public interface StoryRepository extends JpaRepository<Story, UUID> {

    @Query("select s from Story s where s.age between ?1 and ?2 and s.bodyPart = ?3 and s.bmi between ?4 and ?5")
    List<Story> findSimilarStoriesByOriginalStoryId(int ageStart, int ageEnd, BodyPart bodyPart, Double bmiStart, Double bmiEnd);

    @Query("""
            select s from Story s
            where s.age between ?1 and ?2 and s.bodyPart = ?3 and s.healthScore between ?4 and ?5 and s.bmi between ?6 and ?7""")
    List<Story> findSimilarStoriesByRequestedParams(int ageStart, int ageEnd, BodyPart bodyPart, Double healthScoreStart, Double healthScoreEnd, Double bmiStart, Double bmiEnd);

    @Transactional
    @Modifying
    @Query("update Story s set s.votes = ?1 where s.id = ?2")
    void updateVotesById(Vote votes, UUID id);
}