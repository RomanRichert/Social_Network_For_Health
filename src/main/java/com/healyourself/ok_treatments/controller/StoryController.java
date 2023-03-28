package com.healyourself.ok_treatments.controller;

import com.healyourself.ok_treatments.dto.StoryRequestDTO;
import com.healyourself.ok_treatments.dto.StoryResponseDTO;
import com.healyourself.ok_treatments.service.StoryService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@Validated
@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("/story")
@Tag(name = "Controller for managing stories")
public class StoryController {

    private final StoryService storyService;

    @PostMapping
    @ResponseStatus(CREATED)
    @ApiResponse(responseCode = "201", description = "Successfully created a story!", content = {
            @Content(mediaType = "application/json",
                    schema = @Schema(implementation = StoryResponseDTO.class))
    })
    @Operation(summary = "Creating a new story", description = "Requires JSON with description, bodyPart, smiley, bmiAnswers and answers to the sf36-questions to create a story. Returns the created story.")
    public StoryResponseDTO createStory(@RequestBody @Valid StoryRequestDTO story) {
        return storyService.createStory(story);
    }

    @GetMapping()
    @ResponseStatus(OK)
    @ApiResponse(responseCode = "200", description = "Successfully returned list of stories", content = {
            @Content(mediaType = "application/json",
                    array = @ArraySchema(schema = @Schema(implementation = StoryResponseDTO.class)))
    })
    @Operation(summary = "Request for all stories", description = "Getting all stories")
    public List<StoryResponseDTO> getAllStories() {
        return storyService.getAllStories();
    }

    @ResponseStatus(OK)
    @GetMapping("/{id}")
    @ApiResponse(responseCode = "200", description = "Successfully returned the story!", content = {
            @Content(mediaType = "application/json",
                    schema = @Schema(implementation = StoryResponseDTO.class))
    })
    @Operation(summary = "Request for a specific story ", description = "Getting an existing story by id")
    public StoryResponseDTO getStory(@PathVariable String id) {
        return storyService.getStoryById(id);
    }

    @ResponseStatus(OK)
    @PutMapping("/{id}")
    @ApiResponse(responseCode = "200", description = "Successfully voted the story!")
    @Operation(summary = "PUT-Request for voting a specific story.", description = "Putting a Vote into Story.")
    public void reactToStory(@PathVariable String id, @RequestParam String vote) {
        storyService.putVote(id, vote);
    }

    @ResponseStatus(OK)
    @GetMapping("/similar-stories/{storyId}")
    @ApiResponse(responseCode = "200", description = "Successfully returned list of similar stories!", content = {
            @Content(mediaType = "application/json",
                    array = @ArraySchema(schema = @Schema(implementation = StoryResponseDTO.class)))
    })
    @Operation(summary = "Request for similar stories", description = "Getting all stories where (age+-6 & body part is equal & health score+-5 & bmi+-3) in comparison with the original story.")
    public List<StoryResponseDTO> getSimilarStoriesById(@PathVariable String storyId) {
        return storyService.getSimilarStories(storyId);
    }

    @ResponseStatus(OK)
    @GetMapping("/similar-stories")
    @ApiResponse(responseCode = "200", description = "Successfully returned list of similar stories!", content = {
            @Content(mediaType = "application/json",
                    array = @ArraySchema(schema = @Schema(implementation = StoryResponseDTO.class)))
    })
    @Operation(summary = "Request for similar stories", description = "Getting all stories where (age+-6 & body part is equal & bmi+-3) in comparison with the original story.")
    public List<StoryResponseDTO> getSimilarStoriesByRequestedParams(@RequestParam int age,
                                                                     @RequestParam double weight,
                                                                     @RequestParam double height,
                                                                     @RequestParam String bodyPart) {
        return storyService.getSimilarStories(age, weight, height, bodyPart);
    }

    @ResponseStatus(OK)
    @PutMapping("/comment/{id}")
    @ApiResponse(responseCode = "200", description = "Successfully voted the story!")
    @Operation(summary = "PUT-Request for voting a specific story.", description = "Putting a Vote into Story.")
    public void commentStory(@PathVariable String id, @RequestParam String comment) {
        storyService.commentStory(id, comment);
    }
}