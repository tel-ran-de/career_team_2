package de.telran.backend.repository;

import de.telran.backend.entity.Profession;
import de.telran.backend.entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Set;

public interface ProfessionRepository extends JpaRepository<Profession, Long> {
    List<Profession> findByNameContainsIgnoreCase(String name);



}
