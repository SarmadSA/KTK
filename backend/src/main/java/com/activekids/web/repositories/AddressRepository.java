package com.activekids.web.repositories;

import com.activekids.web.model.Address;
import org.springframework.data.repository.CrudRepository;

public interface AddressRepository extends CrudRepository<Address, Integer> {
    Address getAddressById(Integer id);
}