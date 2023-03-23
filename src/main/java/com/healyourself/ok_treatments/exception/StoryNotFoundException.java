package com.healyourself.ok_treatments.exception;

import static com.healyourself.ok_treatments.exception.messages.ErrorMessage.STORY_NOT_FOUND;

public class StoryNotFoundException extends EntityNotFoundException {

    public StoryNotFoundException(String storyId) {
        super(STORY_NOT_FOUND.getMessage()+storyId);
    }
}