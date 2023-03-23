package de.telran.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;
/**
 * Сlass describes the video
 * @author Ivan Zamula, Anna Etzler
 * @version 1.0
 */
@Entity
@Table(name="video")
@Data
@NoArgsConstructor
public class Video {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long videoId;

    @NotBlank(message = "Video URL is mandatory")
    @Column(name = "video_url", nullable = false)
    private String videoURL;

    @NotBlank(message = "Name is mandatory")
    private String name;

    private Date data;

    @Column(name = "video_length", nullable = true)
    private Integer video_length;

//    @NotBlank(message = "Preview is mandatory")
    private byte[] preview;

    @NotEmpty
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "video_category",
            joinColumns = { @JoinColumn(name = "video_id") },
            inverseJoinColumns = { @JoinColumn(name = "category_id") })
    private Set<Category> categories = new HashSet<Category>();

    @NotEmpty
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "video_profession",
            joinColumns = { @JoinColumn(name = "video_id") },
            inverseJoinColumns = { @JoinColumn(name = "profession_id") })
    private Set<Profession> professions = new HashSet<Profession>();

    public Video(String videoURL, String name) {
        this.videoURL = videoURL;
        this.name = name;
        this.video_length = 0;
    }

    public Video(String videoURL, String name, byte[] preview) {
        this.videoURL = videoURL;
        this.name = name;
        this.preview = preview;
    }

    public Video(String videoURL, String name, Date data, int video_length, byte[] preview, Set<Category> categories,
                 Set<Profession> professions) {
        this.videoURL = videoURL;
        this.name = name;
        this.data = data;
        this.video_length = video_length;
        this.preview = preview;
        this.categories = categories;
        this.professions = professions;
    }
}
