package de.telran.backend.utils;

import lombok.Data;

import java.util.Arrays;

@Data
public class Body {
    public String search;
    public Long[] filters;

    @Override
    public String toString() {
        return "Body{" +
                "search='" + search + '\'' +
                ", filters=" + Arrays.toString(filters) +
                '}';
    }
}
