package de.telran.backend.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="category")
@Data
@NoArgsConstructor
public class Category {
    @Id
    @Column(name = "category_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long categoryId;

    @NotBlank(message = "Category name is mandatory")
    @Column(nullable = false)
    private String name;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "category_type_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private CategoryType categoryType;

    @ManyToMany(mappedBy = "video", cascade = { CascadeType.ALL })
    private Set<Video> videos = new HashSet<Video>();

    public Category(String name, CategoryType categoryType) {
        this.name = name;
        this.categoryType = categoryType;
    }

    public Category(String name, CategoryType categoryType, Set<Video> videos) {
        this.name = name;
        this.categoryType = categoryType;
        this.videos = videos;
    }
}
