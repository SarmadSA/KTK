package com.activekids.web.services;


import com.activekids.web.model.Listing;

public interface ListingService {
    Iterable<Listing> getAllListings();

    boolean createListing(Listing listing);
}
