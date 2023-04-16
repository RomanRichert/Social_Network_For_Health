package com.healyourself.ok_treatments.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.UUID;

import static jakarta.persistence.CascadeType.*;
import static jakarta.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@ToString
@Transactional
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "story_comments")
public class Comment {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",
            strategy = "com.healyourself.ok_treatments.generator.UuidTimeSequenceGenerator")
    private UUID id;

    @Column(name = "text")
    private String text;

    @ToString.Exclude
    @JoinColumn(name = "story_id", referencedColumnName = "id")
    @ManyToOne(cascade = {MERGE, PERSIST, REFRESH}, fetch = LAZY)
    private Story story;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Comment comment)) return false;
        return id.equals(comment.id) && text.equals(comment.text);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, text);
    }

    public Comment(String text, Story story) {
        this.text = text;
        this.story = story;
    }
}