package com.example.demo.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.project.model.Bookmodel;
import com.example.demo.project.repository.Bookrepo;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/booking")
public class Bookingcontrol {
	
	@Autowired
	Bookrepo repo;
	
	
	@PostMapping("/posting")
	public String pos(@RequestBody Bookmodel d) {
		repo.save(d);
		return "Booking succes";
	}
	
	
	@GetMapping("/bookdata/{uname}")
	List<Bookmodel> getd(@PathVariable String uname){
		List<Bookmodel> ll=repo.findByName(uname);
		return ll;
	}
	@DeleteMapping("/dele/{id}")
	public String deletedata(@PathVariable int id)
	{
		repo.deleteById(id);
		return "Deleted";
	}
}
