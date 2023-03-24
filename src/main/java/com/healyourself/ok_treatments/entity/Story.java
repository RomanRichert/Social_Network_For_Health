package com.healyourself.ok_treatments.entity;

import com.healyourself.ok_treatments.enums.BodyPart;
import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.FetchType.LAZY;

@Getter
@Setter
@Entity
@ToString
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

    @Column(name = "age")
    @Min(value = 1, message = "Age should be between 1 and 122")
    @Max(value = 122, message = "Age should be between 1 and 122")
    private int age;

    @Column(name = "description")
    private String description;

    @Column(name = "body_part")
    private BodyPart bodyPart;

    @Column(name = "health_score")
    private Double healthScore;

    @Column(name = "bmi")
    private Double bmi;

    @OneToMany(cascade = ALL, mappedBy = "story", fetch = LAZY)
    @ToString.Exclude
    private Set<Parameter> params = new LinkedHashSet<>(2);

    @ManyToMany(cascade = ALL, fetch = LAZY)
    @ToString.Exclude
    private List<Therapy> therapies = new ArrayList<>();

    @OneToMany(cascade = ALL, mappedBy = "story", fetch = LAZY)
    @ToString.Exclude
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(cascade = ALL, mappedBy = "story", fetch = LAZY)
    @ToString.Exclude
    private List<Vote> votes = new ArrayList<>();

    public void addParameter(Parameter p) {
        params.add(p);
    }

    public void addTherapy(Therapy t) {
        therapies.add(t);
    }

    public void addComment(Comment c) {
        comments.add(c);
    }

    public void addVote(Vote v) {
        votes.add(v);
    }

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

    public Story(int age, String description, BodyPart bodyPart, Double healthScore, Double bmi) {
        this.age = age;
        this.description = description;
        this.bodyPart = bodyPart;
        this.healthScore = healthScore;
        this.bmi = bmi;
    }
}