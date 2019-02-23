package com.activekids.web.controllers;

import com.activekids.web.model.User;
import com.activekids.web.responses.Response;
import com.activekids.web.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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

    @Transactional
    @PostMapping(path="/add", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity addUser(@Valid @RequestBody User user){
        boolean successfullyCreated = userService.createUser(user);

        if(successfullyCreated){
            return new ResponseEntity<>(Response.USER_CREATED, HttpStatus.CREATED);
        }
        else {
            return new ResponseEntity<>(Response.USER_NOT_CREATED, HttpStatus.BAD_REQUEST);
        }
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
