package com.activekids.web.services;

import com.activekids.web.model.User;
import com.activekids.web.repositories.UserRepository;
import com.activekids.web.security.jwt.JwtService;
import com.activekids.web.support.DateGenerator;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.util.StringUtils;

@Service
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;
    private BCryptPasswordEncoder encoder;
    private JwtService jwtService;
    private DateGenerator dateGenerator;

    @Autowired
    public UserServiceImp(UserRepository userRepository, JwtService jwtService, DateGenerator dateGenerator) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.dateGenerator = dateGenerator;
        this.encoder = new BCryptPasswordEncoder();
    }

    @Override
    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public boolean createUser(User user) {
        boolean  userCreated = false;

       //if(user.getPassword() != null) {
       //    //Hash password, hash -> salt + password. everything is done by this class.
       //    String hashedPassword = this.encoder.encode(user.getPassword());
       //    user.setPassword(hashedPassword);
       //}

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
        userToUpdate.setToken(user.getToken()); //TODO -Not sure if needed

        return true;
    }

    private boolean userExist(String email){
        boolean exists = false;

        if(userRepository.findByEmail(email).isPresent()){
            exists = true;
        }
        return exists;
    }

    public User createUserToken(String email, String secret) {
        String token = jwtService.createToken(email, secret, dateGenerator.getExpirationDate());
        User user = userRepository.getUserByEmail(email);
        user.setToken(token);
        boolean userUpdated = updateUser(user.getId(), user);
        if(userUpdated){
            return user;
        }
        return null;
    }

    public User validateUser(String token, String secret) {
        String username = jwtService.getUsername(token, secret);
        if (username != null ) {
            User user = userRepository.getUserByEmail(username);
            if (user != null && token.equals(user.getToken()) && jwtService.isValid(token, secret)) {
                return user;
            }
        }
        return null;
    }

    public User isLoginValid(String username, String pass)  {
        if(!StringUtils.hasText(username) || !StringUtils.hasText(pass)) {
            return null;
        }
        String password = new String(Base64.decodeBase64(pass.getBytes()));
        User u = userRepository.getUserByEmail(username);
        System.out.println("User: " + username + " Pass: " + pass);
        if(u == null) {
            return null;
        }
        if(!u.getPassword().equals(password)){
            return null;
        }
        return u;
    }
}