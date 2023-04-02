package com.healyourself.ok_treatments.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.UUID;

import static jakarta.persistence.CascadeType.*;
import static jakarta.persistence.FetchType.LAZY;

@Getter
@Setter
@Entity
@ToString
@Transactional
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "therapies")
public class Therapy {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",
            strategy = "com.healyourself.ok_treatments.generator.UuidTimeSequenceGenerator")
    private UUID id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "smiley")
    @Min(value = 0, message = "Smiley-value should be between 0 and 4")
    @Max(value = 4, message = "Smiley-value should be between 0 and 4")
    private int smiley;

    @ManyToOne(cascade = {MERGE, PERSIST, REFRESH}, fetch = LAZY)
    @JoinColumn(name = "story_id",
            referencedColumnName = "id")
    @ToString.Exclude
    private Story story;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Therapy therapy)) return false;
        return id.equals(therapy.id) && name.equals(therapy.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description);
    }

    public Therapy(String name, String description, int smiley, Story story) {
        this.name = name;
        this.description = description;
        this.smiley = smiley;
        this.story = story;
    }
}