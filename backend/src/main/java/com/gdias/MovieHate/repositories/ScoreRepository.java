package com.gdias.MovieHate.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gdias.MovieHate.entities.Score;
import com.gdias.MovieHate.entities.ScorePK;


public interface ScoreRepository extends JpaRepository<Score, ScorePK> {

}
