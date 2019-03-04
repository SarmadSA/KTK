package com.activekids.web.services;

import com.activekids.web.model.Address;
import com.activekids.web.repositories.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressServiceImp implements AddressService {

    private final AddressRepository addressRepository;

    @Autowired
    public AddressServiceImp(AddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    @Override
    public boolean createAddress(Address address) {
        addressRepository.save(address);
        return true;
    }

    @Override
    public boolean removeAddress(Integer id) {
        addressRepository.deleteById(id);
        return true;
    }

    @Override
    public boolean updateAddress(Integer id, Address address) {
        Address addressToUpdate = addressRepository.getAddressById(id);
        addressToUpdate.setCountry(address.getCountry());
        addressToUpdate.setCity(address.getCity());
        addressToUpdate.setStreet(address.getStreet());
        addressToUpdate.setZipCode(address.getZipCode());
        return true;
    }
}