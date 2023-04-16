package com.healyourself.ok_treatments.mapper;

import com.healyourself.ok_treatments.entity.Comment;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CommentMapper {

    static String getText(Comment comment) {
        return comment.getText();
    }
}