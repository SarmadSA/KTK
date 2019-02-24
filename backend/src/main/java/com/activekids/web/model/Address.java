package com.activekids.web.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Address {

    //@NotNull //TODO: only when you create database set to notnull
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Size(min = 1, max = 60, message = "{address.country.size}")
    @NotNull(message = "{address.country.notNull}")
    @NotBlank(message = "{address.country.notBlank}")
    private String country;

    @Size(min = 1, max = 60, message = "{address.city.size}")
    @NotNull(message = "{address.city.notNull}")
    @NotBlank(message = "{address.city.notBlank}")
    private String city;

    @Size(min = 1, max = 255, message = "{address.street.size}")
    @NotNull(message = "{address.street.notNull}")
    @NotBlank(message = "{address.street.notBlank}")
    private String street;

    @PositiveOrZero(message = "{address.ZipCode.PositiveOrZero}")
    @NotNull(message = "{address.ZipCode.notNull}")
    @NotBlank(message = "{address.ZipCode.notBlank}")
    private Integer ZipCode;
}
