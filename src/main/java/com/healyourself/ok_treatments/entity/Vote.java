package com.healyourself.ok_treatments.entity;

import com.healyourself.ok_treatments.enums.VoteType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.UUID;

import static jakarta.persistence.CascadeType.*;
import static jakarta.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@Transactional
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "story_votes")
public class Vote {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",
            strategy = "com.healyourself.ok_treatments.generator.UuidTimeSequenceGenerator")
    private UUID id;

    @Column(name = "type")
    private VoteType type;

    @ManyToOne(cascade = {MERGE, PERSIST, REFRESH}, fetch = LAZY)
    @JoinColumn(name = "story_id", referencedColumnName = "id")
    private Story story;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Vote vote)) return false;
        return id.equals(vote.id) && Objects.equals(story, vote.story);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, story);
    }

    public Vote(VoteType type, Story story) {
        this.type = type;
        this.story = story;
    }
}