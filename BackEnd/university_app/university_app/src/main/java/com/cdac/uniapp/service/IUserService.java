package com.cdac.uniapp.service;

import com.cdac.uniapp.entity.User;

public interface IUserService {
	User registerUser(User user);
	User authenticateUser(User user);
}
