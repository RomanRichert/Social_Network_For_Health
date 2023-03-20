package com.healyourself.ok_treatments.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.UUID;

@Getter
@Setter
@Entity
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
    String name;

    @Column(name = "description")
    String description;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Therapy therapy)) return false;
        return id.equals(therapy.id) && description.equals(therapy.description);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description);
    }
}