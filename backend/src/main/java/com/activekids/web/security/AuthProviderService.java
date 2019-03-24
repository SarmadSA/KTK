package com.activekids.web.security;

import com.activekids.web.model.User;
import com.activekids.web.security.factory.UsernamePasswordAuthenticationTokenFactory;
import com.activekids.web.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class AuthProviderService implements AuthenticationProvider {

    private UserService userService;
    private UsernamePasswordAuthenticationTokenFactory usernamePasswordAuthenticationTokenFactory;

    @Autowired
    public AuthProviderService(UserService userService,
                               UsernamePasswordAuthenticationTokenFactory usernamePasswordAuthenticationTokenFactory) {
        this.userService = userService;
        this.usernamePasswordAuthenticationTokenFactory = usernamePasswordAuthenticationTokenFactory;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String login = authentication.getName();
        String password = authentication.getCredentials().toString();
        System.out.println("Doing login " + login + " Password: " + password);
        User u = userService.isLoginValid(login, password);
        if(u != null) {
            System.out.println("Login successful. User: " + login);
            return usernamePasswordAuthenticationTokenFactory.create(u);
        }
        throw new UsernameNotFoundException("Not valid login/password");
    }

    @Override
    public boolean supports(Class<?> aClass) {
        return aClass.equals(UsernamePasswordAuthenticationToken.class);
    }
}
