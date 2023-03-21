package com.healyourself.ok_treatments.repository;

import com.healyourself.ok_treatments.entity.Story;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StoryRepository extends CrudRepository<Story, String> {
    // select * from bistro.story c order by c.name
    Story findByName(); // ByOrder
}
