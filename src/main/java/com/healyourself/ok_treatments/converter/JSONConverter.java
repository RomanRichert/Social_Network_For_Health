package com.healyourself.ok_treatments.converter;

import com.google.gson.Gson;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import net.minidev.json.JSONObject;

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