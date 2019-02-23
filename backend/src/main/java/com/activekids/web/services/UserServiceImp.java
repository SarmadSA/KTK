package com.activekids.web.services;

import com.activekids.web.model.Address;
import com.activekids.web.model.User;
import com.activekids.web.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public boolean createUser(User user) {
        userRepository.save(user);
        //TODO: check if user saved in database then return correct boolean value
        return true;

    }

    @Override
    public boolean removeUser(Long id) {
        userRepository.deleteById(id);
        return true;
    }
}