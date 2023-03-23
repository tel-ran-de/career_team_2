package de.telran.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Сlass describes the category of video
 * @author Ivan Zamula, Anna Etzler
 * @version 1.0
 */
@Entity
@Table(name="category")
@Data
@NoArgsConstructor
public class Category {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryId;

    @NotBlank(message = "Category name is mandatory")
    @Column(nullable = false)
    private String name;

    @ManyToOne
    @JoinColumn(name = "category_type_id")
    private CategoryType categoryType;


    public Category(String name, CategoryType categoryType) {
        this.name = name;
        this.categoryType = categoryType;
    }

}
