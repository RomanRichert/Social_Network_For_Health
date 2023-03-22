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

    @GetMapping("/{id}")
    @ResponseStatus(OK)
    @ApiResponse(responseCode = "200", description = "Successfully returned the story!", content = {
            @Content(mediaType = "application/json",
                    schema = @Schema(implementation = StoryResponseDTO.class))
    })
    @Operation(summary = "Request for a specific story ", description = "Getting an existing story by id")
    public StoryResponseDTO getStory(@PathVariable String id){
        return storyService.getStoryById(id);
    }

    @PutMapping("/{id}")
    public void reactToStory(@PathVariable String id, @RequestParam() String vote){
        storyService.putVote(id, vote);
    }
}