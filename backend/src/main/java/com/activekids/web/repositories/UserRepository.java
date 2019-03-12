package com.activekids.web.repositories;

import com.activekids.web.model.User;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UserRepository extends CrudRepository<User, Integer> {
    User getUserById(Integer id);

    Optional<User> findByEmail(String email);
}