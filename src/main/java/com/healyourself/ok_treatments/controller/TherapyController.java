package com.healyourself.ok_treatments.controller;

import com.healyourself.ok_treatments.dto.TherapyDTO;
import com.healyourself.ok_treatments.service.TherapyService;
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
@RequestMapping("/therapy")
@Tag(name = "Controller for managing therapies")
public class TherapyController {

    private final TherapyService therapyService;

    @PostMapping("/{storyId}")
    @ResponseStatus(CREATED)
    @ApiResponse(responseCode = "201", description = "Successfully created a therapy!", content = {
            @Content(mediaType = "application/json",
                    schema = @Schema(implementation = TherapyDTO.class))
    })
    @Operation(summary = "Creating a new therapy", description = "Requires JSON with name, description and an int between 0 and 4, that represent a smiley, and id of the story that creates this therapy. Creates a therapy. Returns the created therapy.")
    public TherapyDTO createTherapy(@RequestBody @Valid TherapyDTO therapyDTO, @PathVariable String storyId){
        return therapyService.createTherapy(therapyDTO, storyId);
    }

    @GetMapping("/{name}")
    @ResponseStatus(OK)
    @ApiResponse(responseCode = "200", description = "Successfully returned the therapy!", content = {
            @Content(mediaType = "application/json",
                    schema = @Schema(implementation = TherapyDTO.class))
    })
    @Operation(summary = "Request for a specific therapy ", description = "Getting an existing therapy by name.")
    public TherapyDTO getTherapy(@PathVariable String name){
        return therapyService.getTherapyByName(name);
    }

    @GetMapping()
    @ResponseStatus(OK)
    @ApiResponse(responseCode = "200", description = "Successfully returned list with therapy names.", content = {
            @Content(mediaType = "application/json",
                    array = @ArraySchema(schema = @Schema(implementation = TherapyDTO.class)))
    })
    @Operation(summary = "Request for all stories", description = "Getting all therapies")
    public List<String> getAllTherapies(){
        return therapyService.getAllTherapies();
    }
}