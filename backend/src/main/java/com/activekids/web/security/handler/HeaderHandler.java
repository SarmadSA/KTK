package com.activekids.web.security.handler;

import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class HeaderHandler {
    private static final String ALLOW_ORIGIN = "Access-Control-Allow-Origin";
    private static final String ALLOW_CREDENTIALS = "Access-Control-Allow-Credentials";
    private static final String ALLOW_HEADERS = "Access-Control-Allow-Headers";
    private static final String OPTIONS = "OPTIONS";
    private static final String OK = "OK";
    private static final String REQUEST_HEADERS = "Access-Control-Request-Headers";
    private static final String STAR = "*"; //* or origin as you prefer //TODO - ONLY AUTHORIZED ORIGINS
    private static final String TRUE = "true";

    public void process(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setHeader(ALLOW_ORIGIN, STAR);
        response.setHeader(ALLOW_CREDENTIALS, TRUE);
        response.setHeader(ALLOW_HEADERS,  request.getHeader(REQUEST_HEADERS));
        if (request.getMethod().equals(OPTIONS)) {
            response.getWriter().print(OK);
            response.getWriter().flush();
        }
    }
}
