package com.healyourself.ok_treatments.converter;

import com.google.gson.Gson;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import net.minidev.json.JSONObject;
import org.mapstruct.BeanMapping;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.boot.autoconfigure.web.servlet.ConditionalOnMissingFilterBean;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
@Converter(autoApply = true)
public class JSONConverter implements AttributeConverter<JSONObject, String> {

    @Override
    public String convertToDatabaseColumn(JSONObject jsonObject) {
        return jsonObject.toJSONString();
    }

    @Override
    public JSONObject convertToEntityAttribute(String s) {
        return new Gson().fromJson(s, JSONObject.class);
    }
}