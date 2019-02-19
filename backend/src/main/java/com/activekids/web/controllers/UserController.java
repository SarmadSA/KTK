package com.activekids.web.controllers;

import com.activekids.web.model.User;
import com.activekids.web.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin //TODO - Allow only authorized domains
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/list")
    public Iterable<User> listAllUsers(){
        return userService.getAllUsers();
    }
}
