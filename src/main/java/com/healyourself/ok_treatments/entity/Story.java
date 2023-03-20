package com.healyourself.ok_treatments.entity;

import com.healyourself.ok_treatments.enums.BodyPart;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.FetchType.LAZY;

@Getter
@Setter
@Entity
@Transactional
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "stories")
public class Story {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",
            strategy = "com.healyourself.ok_treatments.generator.UuidTimeSequenceGenerator")
    private UUID id;

    @Column(name = "description")
    private String description;

    @Column(name = "body_part")
    private BodyPart bodyPart;

    @Column(name = "health_score")
    private Integer healthScore;

    @Column(name = "bmi")
    private Integer bmi;

    @OneToMany(cascade =  ALL, mappedBy = "story", fetch = LAZY)
    private Set<Parameter> params = new LinkedHashSet<>();

    @ManyToMany(cascade = ALL, fetch = LAZY)
    private List<Therapy> therapies = new ArrayList<>();

    @OneToMany(cascade = ALL, mappedBy = "story", fetch = LAZY)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(cascade = ALL, mappedBy = "story", fetch = LAZY)
    private List<Vote> votes = new ArrayList<>();

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Story story)) return false;
        return id.equals(story.id) && Objects.equals(description, story.description) && Objects.equals(comments, story.comments);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, comments);
    }
}