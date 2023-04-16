package com.healyourself.ok_treatments.mapper;

import com.healyourself.ok_treatments.entity.Vote;
import org.mapstruct.Mapper;

import java.util.List;

import static com.healyourself.ok_treatments.enums.VoteType.SORRY;

@Mapper(componentModel = "spring")
public interface VoteMapper {

    static Integer countSorryVotes(List<Vote> votes){
        Integer count = 0;

        for (Vote vote : votes){
            if (vote.getType() == SORRY) count++;
        }

        return count;
    }
}