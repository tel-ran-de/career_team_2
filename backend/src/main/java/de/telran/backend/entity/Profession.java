package de.telran.backend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import lombok.NoArgsConstructor;
/**
 * Сlass describes the profession
 * @author Ivan Zamula, Anna Etzler
 * @version 1.0
 */
@Entity
@Table(name="profession")
@Data
@NoArgsConstructor
public class Profession {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;

    @NotBlank(message = "Profession name is mandatory")
    @Column(nullable = false)
    private String name;
}
