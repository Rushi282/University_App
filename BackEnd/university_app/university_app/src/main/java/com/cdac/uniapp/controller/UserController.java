package com.cdac.uniapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.uniapp.entity.User;
import com.cdac.uniapp.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

	@Autowired
	private IUserService userService;
	
	@PostMapping("/signup")
	public ResponseEntity<?> addUser(@RequestBody User user){
		System.out.println("user added: "+user);
		return ResponseEntity.status(200).body(userService.registerUser(user));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> authUser(@RequestBody User user){
		return ResponseEntity.status(200).body(userService.authenticateUser(user));
	}
}
