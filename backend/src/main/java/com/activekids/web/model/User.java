package com.activekids.web.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

@Entity
public class User {

    @Id
    @NotNull
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Getter @Setter
    private Long id;

    @Email
    @Size(min = 1, max = 254)
    @NotNull
    @Getter @Setter
    private String email;

    @Size(min = 1, max = 255)
    @NotNull
    @Getter @Setter
    private String firstName;

    @Size(min = 1, max = 255)
    @NotNull
    @Getter @Setter
    private String lastName;

    @Size(min = 6, max = 255)
    @NotNull
    @Getter @Setter
    private String password;

    //@NotNull
    @Getter @Setter
    private Date birthDate;

    @Size(max = 255)
    @Getter @Setter
    private String image;

    @ManyToOne
    @Getter @Setter
    private Address address;

}
