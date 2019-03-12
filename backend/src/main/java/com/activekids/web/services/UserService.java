package com.activekids.web.services;


import com.activekids.web.model.User;

public interface UserService {
    Iterable<User> getAllUsers();

    boolean createUser(User user);

    boolean removeUser(Integer id);

    boolean updateUser(Integer id, User user);
}