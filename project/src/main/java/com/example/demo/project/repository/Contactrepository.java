package com.example.demo.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.project.model.Contactmodel;

public interface Contactrepository extends JpaRepository<Contactmodel, String> {

}
