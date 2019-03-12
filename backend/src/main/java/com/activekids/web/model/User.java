package com.activekids.web.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Date;
import java.util.List;
import java.util.Set;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class User {

    //@NotNull auto generated value, no need for not null (//TODO: only when you create database set to notnull)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Email(message = "{user.email.email}")
    @Size(min = 3, max = 254, message = "{user.email.size}")
    @NotNull(message = "{user.email.notNull}")
    @NotBlank(message = "{user.email.NotBlank}")
    private String email;

    @Size(min = 2, max = 60, message = "{user.firstName.size}")
    @NotNull(message = "{user.firstName.notNull}")
    @NotBlank(message = "{user.firstName.NotBlank}")
    private String firstName;

    @Size(min = 2, max = 60, message = "{user.lastName.size}")
    @NotNull(message = "{user.lastName.notNull}")
    @NotBlank(message = "{user.lastName.notBlank}")
    private String lastName;

    @Size(min = 8, max = 255, message = "{user.password.size}")
    @NotNull(message = "{user.password.notNull}")
    private String password;

    @Past(message = "{user.birthDate.past}")
    @DateTimeFormat
    @Temporal(TemporalType.DATE)
    private Date birthDate;

    @Size(min = 1, max = 60, message = "{user.country.size}")
    @NotNull(message = "{user.country.notNull}")
    @NotBlank(message = "{user.country.notBlank}")
    private String country;

    @Size(max = 255)
    private String image;

    @ManyToOne
    private Address address;

    //@OneToMany
    //private List<Listing> listings;

    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles;

    public User(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.firstName = user.getFirstName();
        this.lastName =user.getLastName();
        this.password = user.getPassword();
        this.birthDate = user.getBirthDate();
        this.image = user.getImage();
        this.roles = user.getRoles();
        this.address = user.getAddress();
    }
}