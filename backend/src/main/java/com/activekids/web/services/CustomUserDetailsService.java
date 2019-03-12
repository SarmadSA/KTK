package com.activekids.web.services;

import com.activekids.web.model.CustomUserDetails;
import com.activekids.web.model.User;
import com.activekids.web.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;

    @Autowired
    public CustomUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> optionalUsers = userRepository.findByEmail(username);

        optionalUsers
                .orElseThrow(() -> new UsernameNotFoundException("Username/Email not found"));
        return optionalUsers
                .map(CustomUserDetails::new).get();
    }
}
