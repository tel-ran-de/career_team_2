package de.telran.backend.repository;

import de.telran.backend.entity.SearchCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<SearchCategory, Long> {
    @Query(value = "SELECT * FROM CATEGORY cat LEFT JOIN CATEGORY_TYPE cat_type ON cat.category_type_id=cat_type.category_type_id", nativeQuery = true)
    public List<SearchCategory> allCategories();

}
