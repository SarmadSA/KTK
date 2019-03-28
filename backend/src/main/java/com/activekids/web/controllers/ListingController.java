package com.activekids.web.controllers;

import com.activekids.web.model.Listing;
import com.activekids.web.responses.Response;
import com.activekids.web.services.ListingService;
import com.activekids.web.services.UploaderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@RestController
@CrossOrigin //TODO - Allow only authorized domains
@RequestMapping("/listing")
public class ListingController {

    private final ListingService listingService;
    private final UploaderService uploaderService;

    @Autowired
    public ListingController(ListingService listingService, UploaderService uploaderService) {
        this.listingService = listingService;
        this.uploaderService = uploaderService;
    }

    @GetMapping("/list")
    public Iterable<Listing> listAllUsers(){
        return listingService.getAllListings();
    }

    /**
     * Upload single file using Spring Controller
     */
    @Transactional
    @PostMapping(value = "/create", consumes = {
            MediaType.APPLICATION_JSON_VALUE,
            MediaType.TEXT_PLAIN_VALUE,
            MediaType.ALL_VALUE})
    public @ResponseBody ResponseEntity uploadFileHandler(@RequestPart("properties") @Valid Listing listing,
                                                  @RequestPart("file") @Valid @NotNull @NotBlank MultipartFile file) {

        String fileName = file.getOriginalFilename();
        try{
            String imagePath = this.uploaderService.uploadImage(file);

            if(imagePath != null){
                System.out.println("Image uploaded!");

                listing.setImage(imagePath);
                boolean successfullyCreated = listingService.createListing(listing);
                if(successfullyCreated){
                    return new ResponseEntity<>(Response.LISTING_CREATED, HttpStatus.CREATED);
                } else {
                    return new ResponseEntity<>(Response.LISTING_NOT_CREATED, HttpStatus.BAD_REQUEST);
                }
            } else{
                String responseMessage = "You failed to upload " + fileName + " because the file was empty.";
                return new ResponseEntity<>(responseMessage, HttpStatus.CONFLICT);
            }

        } catch (Exception e){
            String responseMessage = "You failed to upload " + fileName + " => " + e.getMessage();
            return new ResponseEntity<>(responseMessage, HttpStatus.CONFLICT);
        }
    }
}