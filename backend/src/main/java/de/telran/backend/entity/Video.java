package de.telran.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Base64;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="video")
@Data
@NoArgsConstructor
public class Video {
    @Id
    @Column(name = "video_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long videoId;

    @NotBlank(message = "Video URL is mandatory")
    @Column(name = "video_url", nullable = false)
    private String videoURL;

    @NotBlank(message = "Name is mandatory")
    private String name;

    private Data data;

    private int length;

    @NotBlank(message = "Preview is mandatory")
    private Base64 preview;

    @ManyToMany(cascade = {
            CascadeType.ALL
    })
    @JoinTable(
            name = "video_category_tag",
            joinColumns = {
                    @JoinColumn(name = "video_id")
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "category_id")
            }
    )
    Set< Category > categories = new HashSet<Category>();

    public Video(String videoURL, String name, Base64 preview) {
        this.videoURL = videoURL;
        this.name = name;
        this.preview = preview;
    }

    public Video(String videoURL, String name, Data data, int length, Base64 preview, Set<Category> categories) {
        this.videoURL = videoURL;
        this.name = name;
        this.data = data;
        this.length = length;
        this.preview = preview;
        this.categories = categories;
    }
}
