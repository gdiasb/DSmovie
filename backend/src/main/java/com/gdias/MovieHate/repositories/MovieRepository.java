package com.gdias.MovieHate.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gdias.MovieHate.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}
