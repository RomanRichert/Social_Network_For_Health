package com.healyourself.ok_treatments.service.implementation;

import com.healyourself.ok_treatments.entity.Story;
import com.healyourself.ok_treatments.repository.StoryRepository;
import com.healyourself.ok_treatments.service.StoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class StoryServiceImpl implements StoryService {
    public final StoryRepository storyRepository;

    @Autowired
    public StoryServiceImpl(StoryRepository storyRepository) {
        this.storyRepository = storyRepository;
    }

    public List<Story> getAllStories() {
        return StreamSupport.stream(storyRepository.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    public void saveStory(Story story) {
        storyRepository.save(story);
    }

    public Story getStoryById(String id) {
        return storyRepository.findById(id).orElse(null);// get();
    }
    public void delStoryById(String id) {
        storyRepository.deleteById(id);
    }
}
