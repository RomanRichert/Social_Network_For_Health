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
    @Operation(summary = "Creating a new story", description = "Requires JSON-object with description, bodyPart, bmiAnswers (Map), answers to the sf36-questions (Map) and the name of the therapy and smiley-value (Map) to create a story. Returns the created story.")
    public StoryResponseDTO createStory(@RequestBody StoryRequestDTO story) {
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
    @GetMapping("/{storyId}")
    @ApiResponse(responseCode = "200", description = "Successfully returned the story!", content = {
            @Content(mediaType = "application/json",
                    schema = @Schema(implementation = StoryResponseDTO.class))
    })
    @Operation(summary = "Request for a specific story ", description = "Getting an existing story by id")
    public StoryResponseDTO getStory(@PathVariable String storyId) {
        return storyService.getStoryById(storyId);
    }

    @ResponseStatus(OK)
    @PatchMapping("vote/{storyId}")
    @ApiResponse(responseCode = "200", description = "Successfully voted the story!")
    @Operation(summary = "PATCH-Request for voting a specific story.", description = "Putting a Vote into Story.")
    public String reactToStory(@PathVariable String storyId) {
        return storyService.putVote(storyId);
    }

    @ResponseStatus(OK)
    @DeleteMapping("vote/{voteId}")
    @ApiResponse(responseCode = "200", description = "Successfully removed vote from the story!")
    @Operation(summary = "DELETE-Request to remove the vote from a specific story.", description = "Deleting a Vote from Story.")
    public void removeVoteFromStory(@PathVariable String voteId) {
        storyService.deleteVote(voteId);
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
    @PatchMapping("/comment/{storyId}")
    @ApiResponse(responseCode = "200", description = "Successfully voted the story!")
    @Operation(summary = "PATCH-Request for commenting a specific story.", description = "Putting a Comment into Story.")
    public void commentStory(@PathVariable String storyId, @RequestParam String comment) {
        storyService.commentStory(storyId, comment);
    }
}