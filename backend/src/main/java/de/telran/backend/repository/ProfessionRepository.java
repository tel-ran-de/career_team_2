package de.telran.backend.repository;

import de.telran.backend.entity.Profession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProfessionRepository extends JpaRepository<Profession, Long> {
    @Query(value = "SELECT * FROM PROFESSION WHERE NAME LIKE '%?1%'", nativeQuery = true)
    List<Profession> findByQuery (String name);
    @Query(value = "SELECT * FROM PROFESSION WHERE NAME = :name", nativeQuery = true)
    List<Profession> findByQuery2 (String name);
    List<Profession> findByNameContains(String name);
    List<Profession> findByNameIsContaining(String name);
}
