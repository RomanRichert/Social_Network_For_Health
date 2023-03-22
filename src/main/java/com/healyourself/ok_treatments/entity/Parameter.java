package com.healyourself.ok_treatments.entity;

import com.healyourself.ok_treatments.converter.JSONConverter;
import com.healyourself.ok_treatments.enums.ParameterType;
import jakarta.persistence.*;
import lombok.*;
import net.minidev.json.JSONObject;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.UUID;

import static jakarta.persistence.FetchType.LAZY;

@Entity
@Getter
@Setter
@Transactional
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "story_params")
public class Parameter {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "UUID")
    @GenericGenerator(name = "UUID",
            strategy = "com.healyourself.ok_treatments.generator.UuidTimeSequenceGenerator")
    private UUID id;

    @Convert(converter = JSONConverter.class)
    @Column(name = "value", columnDefinition = "jsonb")
    private JSONObject value;

    @Column(name = "type")
    private ParameterType type;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "story_id",
            referencedColumnName = "id")
    private Story story;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Parameter parameter)) return false;
        return id.equals(parameter.id) && Objects.equals(value, parameter.value);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, value);
    }

    public Parameter(JSONObject value, ParameterType type, Story story) {
        this.value = value;
        this.type = type;
        this.story = story;
    }
}