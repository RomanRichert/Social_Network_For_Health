package com.healyourself.ok_treatments.controller;

import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import com.healyourself.ok_treatments.dto.StoryResponseDTO;
import com.healyourself.ok_treatments.service.StoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.HttpStatus.CREATED;

@Validated
@RestController
@RequiredArgsConstructor
@RequestMapping("/story")
public class StoryController {

    private final StoryService storyService;

    @PostMapping
    @ResponseStatus(CREATED)
    public StoryResponseDTO createStory(@RequestBody @Valid StoryRequestDTO story){
        return storyService.saveStory(story);
    }
}