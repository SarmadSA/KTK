package com.activekids.web.model;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class UserTest {

    User user;

    @Before
    public void setUp(){
        this.user = new User();
    }

    @Test
    public void getId(){
        Integer idValue = 4;
        user.setId(idValue);

        assertEquals(idValue, user.getId());
    }

    @Test
    public void getFirstName(){

    }

}
