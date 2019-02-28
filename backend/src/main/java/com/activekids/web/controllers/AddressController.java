package com.activekids.web.controllers;

import com.activekids.web.model.Address;
import com.activekids.web.responses.Response;
import com.activekids.web.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin //TODO - Allow only authorized domains
@RequestMapping("/address")
public class AddressController {

    private final AddressService addressService;

    @Autowired
    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @Transactional
    @PutMapping(path="/add", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity addAddress(@Valid @RequestBody Address address){
        boolean successfullyCreated = addressService.createAddress(address);

        if(successfullyCreated){
            return new ResponseEntity<>(Response.ADDRESS_CREATED, HttpStatus.CREATED);
        }
        else {
            return new ResponseEntity<>(Response.ADDRESS_NOT_CREATED, HttpStatus.BAD_REQUEST);
        }
    }

    @Transactional
    @DeleteMapping("/delete/{addressId}")
    public ResponseEntity deleteUser(@PathVariable Integer addressId){
        boolean successfullyDeleted = addressService.removeAddress(addressId);

        if(successfullyDeleted){
            return new ResponseEntity<>(Response.ADDRESS_DELETED, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(Response.ADDRESS_NOT_DELETED, HttpStatus.NO_CONTENT);
        }
    }

    @Transactional
    @PostMapping("/update/{addressId}")
    public ResponseEntity updateUser(@PathVariable Integer addressId, @Valid @RequestBody Address address){
        boolean successfullyUpdated = addressService.updateAddress(addressId, address);

        if(successfullyUpdated){
            return new ResponseEntity<>(Response.ADDRESS_UPDATED, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(Response.ADDRESS_NOT_UPDATED, HttpStatus.NO_CONTENT);
        }
    }
}