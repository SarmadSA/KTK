package com.activekids.web.services;

import com.activekids.web.model.User;
import com.activekids.web.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


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
    public boolean removeUser(Integer id) {
        userRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean updateUser(Integer id, User user) {
        User userToUpdate = userRepository.getUserById(id);
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setFirstName(user.getFirstName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setPassword(user.getPassword());
        userToUpdate.setBirthDate(user.getBirthDate());
        userToUpdate.setImage(user.getImage());
        userToUpdate.setAddress(user.getAddress());

        return true;
    }
}