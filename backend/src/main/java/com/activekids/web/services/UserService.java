package com.activekids.web.services;


import com.activekids.web.model.User;

public interface UserService {
    Iterable<User> getAllUsers();
    boolean createUser(String email, String firstName, String lastName, String password);
}