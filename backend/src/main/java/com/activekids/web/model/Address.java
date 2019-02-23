package com.activekids.web.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Address {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Size(min = 2, max = 60)
    @NotNull
    private String country;

    @Size(min = 2, max = 60)
    @NotNull
    private String city;

    @Size(min = 2, max = 255)
    @NotNull
    private String street;

    @NotNull
    private Integer ZipCode;
}
