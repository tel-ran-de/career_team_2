package de.telran.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="category_type")
@Data
@NoArgsConstructor
public class CategoryType {
    @Id
    @Column(name = "category_type_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryTypeId;

    @NotBlank(message = "Category type name is mandatory")
    @Column(nullable = false)
    private String name;

    public CategoryType(String name) {
        this.name = name;
    }
}
