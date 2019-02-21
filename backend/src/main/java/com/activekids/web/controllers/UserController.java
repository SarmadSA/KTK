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

    @PostMapping(path="/add")
    public String addUser(@RequestParam String email, @RequestParam String firstName, @RequestParam String lastName, @RequestParam String password){
        String response = "Something went wrong!";

        boolean successfullyCreated = userService.createUser(email, firstName, lastName, password);
        if(successfullyCreated){
            response = "User Created!";
        }

        return response;
    }

    @DeleteMapping(path="/delete")
    public String deleteUser(@RequestParam Long userId){
        String response = "Something went wrong!";

        boolean successfullyCreated = userService.removeUser(userId);
        if(successfullyCreated){
            response = "User deleted!";
        }

        return response;
    }
}
