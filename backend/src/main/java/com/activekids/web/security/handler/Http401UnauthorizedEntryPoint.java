package com.activekids.web.security.handler;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class Http401UnauthorizedEntryPoint implements AuthenticationEntryPoint {

    private HeaderHandler headerHandler;

    @Autowired
    public Http401UnauthorizedEntryPoint(HeaderHandler headerHandler) {
        this.headerHandler = headerHandler;
    }

    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException e) throws IOException, ServletException {
        headerHandler.process(request, response);
        response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Access Denied");
    }
}
