package com.activekids.web.security.filter;

import com.activekids.web.model.User;
import com.activekids.web.security.SecurityAppContext;
import com.activekids.web.security.factory.UsernamePasswordAuthenticationTokenFactory;
import com.activekids.web.services.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {

    private static final String AUTHORIZATION = "Authorization";
    private static final String UTF_8 = "UTF-8";
    private static final int BEGIN_INDEX = 7;

    private UserServiceImp userService;
    private UsernamePasswordAuthenticationTokenFactory usernamePasswordAuthenticationTokenFactory;
    private SecurityAppContext securityAppContext;

    @Autowired
    public JwtAuthenticationTokenFilter(UserServiceImp userService,
                                        UsernamePasswordAuthenticationTokenFactory usernamePasswordAuthenticationTokenFactory,
                                        SecurityAppContext securityAppContext) {
        this.userService = userService;
        this.usernamePasswordAuthenticationTokenFactory = usernamePasswordAuthenticationTokenFactory;
        this.securityAppContext = securityAppContext;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        String authToken = request.getHeader(AUTHORIZATION);
        if(authToken != null) {
            try {
                authToken = new String(authToken.substring(BEGIN_INDEX).getBytes(), UTF_8);
                SecurityContext context = securityAppContext.getContext();
                if(context.getAuthentication() == null) {
                    System.out.println("Checking authentication for token " + authToken);
                    User u = userService.validateUser(authToken, request.getRemoteAddr());
                    if(u != null) {
                        System.out.println("User " + u.getEmail() + " found.");
                        Authentication authentication = usernamePasswordAuthenticationTokenFactory.create(u);
                        context.setAuthentication(authentication);
                    }
                }
            } catch (StringIndexOutOfBoundsException e) {
                System.out.println(e.getMessage());
            }

        }
        chain.doFilter(request, response);
    }
}
