package com.example.demo.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.project.model.Signmodel;

public interface Signrepository extends JpaRepository<Signmodel,String> {

	Signmodel findByName(String mname);
	
	
}
