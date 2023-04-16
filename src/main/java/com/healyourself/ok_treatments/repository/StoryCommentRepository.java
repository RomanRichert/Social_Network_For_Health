package com.healyourself.ok_treatments.repository;

import com.healyourself.ok_treatments.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface StoryCommentRepository extends JpaRepository<Comment, UUID> {
}