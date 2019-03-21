package com.activekids.web.security.factory;

import com.activekids.web.model.Role;
import com.activekids.web.model.User;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Iterator;

@Component
public class UsernamePasswordAuthenticationTokenFactory {

    public UsernamePasswordAuthenticationToken create(User u) {

        ArrayList<SimpleGrantedAuthority> authorities = new ArrayList<>();
        Iterator<Role> it =  u.getRoles().iterator();

        while(it.hasNext()){
            authorities.add(new SimpleGrantedAuthority(it.next().getRole()));
        }
        return new UsernamePasswordAuthenticationToken(u.getEmail(), u.getPassword(), authorities);
    }

}
