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
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

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

    /**
     * Upload single file using Spring Controller
     */
    @RequestMapping(value = "/uploadFile", method = RequestMethod.POST)
    public @ResponseBody String uploadFileHandler(@RequestParam("file") MultipartFile file) {

        String fileName = file.getOriginalFilename();
        System.out.println(fileName);
        System.out.println(file.getName());

        if (!file.isEmpty()) {
            try {
                byte[] bytes = file.getBytes();

                // Creating the directory to store file
                String rootPath = System.getProperty("catalina.home");
                File directory = new File(rootPath + File.separator + "tmpFiles");
                if (!directory.exists()){
                    directory.mkdirs();
                }

                // Create the file on server
                File serverFile = new File(directory.getAbsolutePath() + File.separator + fileName);
                BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
                stream.write(bytes);
                stream.close();

                System.out.println("Server File Location=" + serverFile.getAbsolutePath());

                return "You successfully uploaded file=" + fileName;
            } catch (Exception e) {
                return "You failed to upload " + fileName + " => " + e.getMessage();
            }
        } else {
            return "You failed to upload " + fileName
                    + " because the file was empty.";
        }
    }
}
