package com.activekids.web.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Address {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter @Setter
    private Long id;

    @Size(min = 2, max = 60)
    @NotNull
    @Getter @Setter
    private String country;

    @Size(min = 2, max = 60)
    @NotNull
    @Getter @Setter
    private String city;

    @Size(min = 2, max = 255)
    @NotNull
    @Getter @Setter
    private String street;

    @NotNull
    @Getter @Setter
    private Integer ZipCode;
}
