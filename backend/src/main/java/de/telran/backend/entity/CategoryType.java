package de.telran.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.aop.target.LazyInitTargetSource;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="category_type")
@Data
@NoArgsConstructor
public class CategoryType {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    @NotBlank(message = "Category type name is mandatory")
    @Column(nullable = false)
    private String name;


    public CategoryType(String name) {
        this.name = name;
    }

}
