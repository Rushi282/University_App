package com.cdac.uniapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.uniapp.dao.UserRepo;
import com.cdac.uniapp.entity.User;

@Service
public class UserService implements IUserService{
	
	@Autowired
	private UserRepo userRepo;

	@Override
	public User registerUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public User authenticateUser(User user) {
		User opUser = userRepo.findByEmail(user.getEmail());
		if(opUser.getPass().equals(user.getPass())) {
			return opUser;
		}
		return null;
	}

}
