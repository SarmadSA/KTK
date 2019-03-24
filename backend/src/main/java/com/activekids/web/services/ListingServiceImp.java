package com.activekids.web.services;

import com.activekids.web.model.Listing;
import com.activekids.web.repositories.ListingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ListingServiceImp implements ListingService {

    private final ListingRepository listingRepository;

    @Autowired
    public ListingServiceImp(ListingRepository listingRepository) {
        this.listingRepository = listingRepository;
    }

    @Override
    public Iterable<Listing> getAllListings() {
        return listingRepository.findAll();
    }

    @Override
    public boolean createListing(Listing listing) {
        listingRepository.save(listing);
        return true;
    }
}
