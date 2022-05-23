package com.gdias.MovieHate.controlllers;

import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gdias.MovieHate.dto.MovieDTO;
import com.gdias.MovieHate.dto.ScoreDTO;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {
	
	@PutMapping
	public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
		return null;
	}
}
