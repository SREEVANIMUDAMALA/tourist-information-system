package com.example.demo.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.project.model.Contactmodel;
import com.example.demo.project.repository.Contactrepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/cont")
public class Contactcontroller {
	@Autowired
	Contactrepository repo;
	
	@PostMapping("/deatils")
	public String con(@RequestBody Contactmodel d) 
	{
	repo.save(d);
	return "We Will Contact You Soon!!!";
	}

}
