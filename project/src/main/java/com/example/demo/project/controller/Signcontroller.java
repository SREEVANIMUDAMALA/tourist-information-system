package com.example.demo.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.project.model.Signmodel;
import com.example.demo.project.repository.Signrepository;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/hostaa")
public class Signcontroller {
	
	@Autowired
	Signrepository repo;
	
	@PostMapping("/Signin")
	
	public String mthd(@RequestBody Signmodel d)
	{
		String user=d.getName();
		Signmodel m=repo.findByName(user);
		if(m==null)
		{
			repo.save(d);
			return "added";
		}
		else {
			return "user alredy exist";
		}
		
	}
	
	@PostMapping("/login/{mname}/{pass}")
	public String login(@PathVariable String mname,@PathVariable String pass)
	{
		Signmodel ll=repo.findByName(mname);
		if (ll==null) {
			return "Invalid Username";
		}
		else {
			if (ll.getPassword().equals(pass)) {
				return "Success";
			}
			else {
				return "Invalid Password";
			}
		}
	}
}
