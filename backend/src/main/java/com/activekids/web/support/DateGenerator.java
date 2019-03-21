package com.activekids.web.support;

import org.springframework.stereotype.Component;

import java.util.Calendar;
import java.util.Date;

@Component
public class DateGenerator {

    public Date getExpirationDate() {
        Calendar c = Calendar.getInstance();
        //c.add(Calendar.DAY_OF_WEEK, 1); //Sets token exp data to 1 day
        c.add(Calendar.HOUR, 1); //Sets token exp data to 1 Hour
        return c.getTime();
    }

}