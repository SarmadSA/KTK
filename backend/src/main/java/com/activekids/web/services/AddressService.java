package com.activekids.web.services;

import com.activekids.web.model.Address;

public interface AddressService {
    boolean createAddress(Address address);

    boolean removeAddress(Integer id);

    boolean updateAddress(Integer id, Address address);
}
