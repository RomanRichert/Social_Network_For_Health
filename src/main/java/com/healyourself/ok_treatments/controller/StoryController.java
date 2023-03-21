package com.healyourself.ok_treatments.controller;

import com.healyourself.ok_treatments.entity.Story;
import com.healyourself.ok_treatments.repository.StoryRepository;
import com.healyourself.ok_treatments.service.implementation.StoryServiceImpl;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class StoryController {

    private final StoryServiceImpl storyServiceImpl;
    private final StoryRepository repository;

    @Autowired
    public StoryController(StoryServiceImpl storyServiceImpl, StoryRepository repository) {
        this.storyServiceImpl = storyServiceImpl;
        this.repository = repository;
    }
    @GetMapping("/addStory")
    public String addStory(Model model) {
        Story story = new Story();
        model.addAttribute("story", story);
        return "story";
    }
    @PostMapping("/addStory")
    public String addStory(@Valid Story story, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            return "story";
        }
       storyServiceImpl.saveStory(story);
        return "redirect:/stories";
    }

    @GetMapping("/stories")
    public String storyTable(Model model) {
        model.addAttribute("stories", storyServiceImpl.getAllStories());
        return "stories";
    }

    @GetMapping("/stories")
    public ResponseEntity<?> getAllStories() {
        return new ResponseEntity<>(repository.findByName(), HttpStatus.OK);
    }

    @GetMapping("/editStory/{id}")
    public String editStory(@PathVariable String id, Model model) {
        Story story = storyServiceImpl.getStoryById(id);
        model.addAttribute("story", story);
        return "story";
    }
    @GetMapping("/deleteStory/{id}")
    public String deleteStory(@PathVariable String id, Model model) {
        storyServiceImpl.delStoryById(id);
        model.addAttribute("story", storyServiceImpl.getAllStories());
        return "redirect:/stories";
    }

    @RequestMapping(value = "/story", method = {RequestMethod.POST, RequestMethod.PUT})
    public ResponseEntity<?> updateStory(@RequestBody Story story) {
        return new ResponseEntity<>(repository.save(story), HttpStatus.CREATED);
    }

    @DeleteMapping("/story/{id}")
    public ResponseEntity<?> deleteStory(@PathVariable String id) {
        Optional<Story> storyOptional = repository.findById(id);
        if (storyOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        repository.delete(storyOptional.get());
        return ResponseEntity.noContent().build();
    }

}