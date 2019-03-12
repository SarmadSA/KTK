package com.activekids.web.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Size(min = 3, max = 45, message = "{listing.title.size}")
    @NotNull(message = "{listing.title.notNull}")
    @NotBlank(message = "{listing.title.NotBlank}")
    private String title;

    @Size(max = 255, message = "{listing.description.size}")
    private String description;

    @Size(min = 1, max = 3, message = "{listing.age.size}")
    @NotNull(message = "{listing.age.notNull}")
    @NotBlank(message = "{listing.age.notBlank}")
    private String age;

    @Size(min = 2, max = 2, message = "{listing.country.size}")
    @NotNull(message = "{listing.country.notNull}")
    @NotBlank(message = "{listing.country.notBlank}")
    private String country;

    @Size(max = 255)
    private String image;

}
