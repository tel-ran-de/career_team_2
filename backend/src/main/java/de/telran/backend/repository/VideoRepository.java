package de.telran.backend.repository;

import de.telran.backend.entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface VideoRepository extends JpaRepository<Video, Long> {

    List<Video> findByNameContainingIgnoreCase(String name);

//    @Query("SELECT VIDEO_ID FROM VIDEO_CATEGORY WHERE CATEGORY_ID IN :ids")
    @Query(value = "SELECT * FROM VIDEO v LEFT JOIN VIDEO_CATEGORY vc ON v.ID=vc.VIDEO_ID WHERE vc.CATEGORY_ID IN :ids", nativeQuery = true)
    List<Video> findVideoIdByCategoryIds(@Param("ids") Set<Long> ids);

    @Query(value = "SELECT * FROM VIDEO v LEFT JOIN VIDEO_PROFESSION vp ON v.ID=vp.VIDEO_ID WHERE vp.PROFESSION_ID IN :ids", nativeQuery = true)
    List<Video> findVideoByProfessionIds(@Param("ids") Set<Long> ids);

}
