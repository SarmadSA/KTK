package com.activekids.web.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@EqualsAndHashCode(exclude="users")
@ToString(exclude="users")
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Role {

    //@NotNull auto generated value, no need for not null (//TODO: only when you create database set to notnull)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Size(min = 2, max = 100)
    @NotNull
    private String role;

    @JsonIgnoreProperties("roles")
    @ManyToMany(mappedBy = "roles", cascade = {CascadeType.MERGE}, fetch = FetchType.EAGER)
    private List<User> users;
}
