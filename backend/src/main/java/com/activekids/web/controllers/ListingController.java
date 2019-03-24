package com.activekids.web.controllers;

import com.activekids.web.model.Listing;
import com.activekids.web.responses.Response;
import com.activekids.web.services.ListingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin //TODO - Allow only authorized domains
@RequestMapping("/listing")
public class ListingController {

    private final ListingService listingService;

    @Autowired
    public ListingController(ListingService listingService) {
        this.listingService = listingService;
    }

    @GetMapping("/list")
    public Iterable<Listing> listAllUsers(){
        return listingService.getAllListings();
    }

    @Transactional
    @PutMapping(path="/add", consumes = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity addListing(@Valid @RequestBody Listing listing){
        boolean successfullyCreated = listingService.createListing(listing);

        if(successfullyCreated){
            return new ResponseEntity<>(Response.LISTING_CREATED, HttpStatus.CREATED);
        }
        else {
            return new ResponseEntity<>(Response.LISTING_NOT_CREATED, HttpStatus.BAD_REQUEST);
        }
    }
}
