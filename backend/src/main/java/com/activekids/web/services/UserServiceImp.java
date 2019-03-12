package com.activekids.web.services;

import com.activekids.web.model.User;
import com.activekids.web.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Service
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;
    private BCryptPasswordEncoder encoder;

    @Autowired
    public UserServiceImp(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.encoder = new BCryptPasswordEncoder();
    }

    @Override
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public boolean createUser(User user) {
        boolean  userCreated = false;

        if(user.getPassword() != null) {
            //Hash password, hash -> salt + password. everything is done by this class.
            String hashedPassword = this.encoder.encode(user.getPassword());
            user.setPassword(hashedPassword);
        }

        if(!userExist(user.getEmail())){
            userRepository.save(user);
            userCreated = true;
        }

        return userCreated;
    }

    @Override
    public boolean removeUser(Integer id) {
        userRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean updateUser(Integer id, User user) {
        User userToUpdate = userRepository.getUserById(id);
        //TODO - check if email does not exist in database before updating
        userToUpdate.setEmail(user.getEmail());
        userToUpdate.setFirstName(user.getFirstName());
        userToUpdate.setLastName(user.getLastName());
        userToUpdate.setPassword(user.getPassword());
        userToUpdate.setCountry(user.getCountry());
        userToUpdate.setBirthDate(user.getBirthDate());
        userToUpdate.setImage(user.getImage());
        userToUpdate.setAddress(user.getAddress());

        return true;
    }

    private boolean userExist(String email){
        boolean exists = false;

        if(userRepository.findByEmail(email).isPresent()){
            exists = true;
        }
        return exists;
    }
}