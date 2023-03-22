package de.telran.backend.repository;

import de.telran.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query(value = "SELECT cat.ID, cat.NAME, cat.CATEGORY_TYPE_ID, ct.NAME AS CATEGORY_TYPE_NAME FROM CATEGORY cat LEFT JOIN CATEGORY_TYPE ct ON cat.CATEGORY_TYPE_ID=ct.ID", nativeQuery = true)
    public List<Category> allCategories();

}
