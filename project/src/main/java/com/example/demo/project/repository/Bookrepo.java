package com.example.demo.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.project.model.Bookmodel;

public interface Bookrepo extends JpaRepository<Bookmodel, Integer> {



	List<Bookmodel> findByName(String uname);

}
