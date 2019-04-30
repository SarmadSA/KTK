package com.activekids.web.model;

import com.activekids.web.model.validation.order.FirstOrder;
import com.activekids.web.model.validation.order.SecondOrder;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;
import javax.validation.constraints.*;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Listing {

    //@NotNull auto generated value, no need for not null (//TODO: only when you create database set to notnull)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotEmpty(message = "{listing.title.notEmpty}")
    @Size(min = 3, max = 45, message = "{listing.title.size}")
    private String title;

    @Size(max = 140, message = "{listing.description.size}")
    private String description;

    //TODO - add name in listing service and other places and add validation messages for name
    //private String kidName;

    @Min(value = 1, message = "{listing.age.min}")
    @Max(value = 200, message = "{listing.age.max}")
    @NotNull(message = "{listing.age.notNull}")
    //@NotBlank(message = "{listing.age.notBlank}")
    private Integer age;

    @Size(min = 1, max = 60, message = "{listing.country.size}")
    @NotEmpty(message = "{listing.country.notEmpty}")
    private String country;

    //@Value("https://dummyimage.com/345x160/000/fff&text=From+database")
    @Size(max = 255)
    //@NotNull(message = "{listing.image.notNull}")
    //@NotBlank(message = "{listing.image.notBlank}")
    private String image;

    @ManyToOne
    private User user;

}
