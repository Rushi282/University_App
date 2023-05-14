package com.cdac.uniapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.uniapp.entity.User;

public interface UserRepo extends JpaRepository<User, Integer>{
	User findByEmail(String email);
}
