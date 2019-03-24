package com.activekids.web.security.handler;

import com.activekids.web.model.User;
import com.activekids.web.services.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AjaxAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private HeaderHandler headerHandler;
    private UserServiceImp userService;

    @Autowired
    public AjaxAuthenticationSuccessHandler(HeaderHandler headerHandler, UserServiceImp userService) {
        this.headerHandler = headerHandler;
        this.userService = userService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        User u = userService.createUserToken(authentication.getName(), request.getRemoteAddr());
        response.getWriter().print("{ \"token\" : \"" + u.getToken() + "\"}");
        response.setStatus(HttpServletResponse.SC_OK);
        headerHandler.process(request, response);
    }
}
