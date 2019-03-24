package com.activekids.web.controllers;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class IndexController{ //implements ErrorController {

    private static final String PATH = "/error";

    //@RequestMapping(value = PATH)
    //public String error() {
    //  return "Error handling";
        //TODO if error is unauthorized redirect to react login page
    //}

    //@Override
    //public String getErrorPath() {
    //  return PATH;
    //}

    @RequestMapping(value = "/redirect", method = RequestMethod.GET)
    public void method(HttpServletResponse httpServletResponse) {
        httpServletResponse.setHeader("Location", "https://www.google.com");
        httpServletResponse.setStatus(302);
    }
}