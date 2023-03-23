package de.telran.backend.repository;

import de.telran.backend.entity.Profession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProfessionRepository extends JpaRepository<Profession, Long> {
    List<Profession> findByNameContains(String name);
}
