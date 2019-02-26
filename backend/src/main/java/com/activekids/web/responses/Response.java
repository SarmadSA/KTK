package com.activekids.web.responses;

import lombok.Getter;

public enum Response {
    USER_CREATED("User created!"),
    USER_NOT_CREATED("Could not create user!"),
    USER_DELETED("User deleted!"),
    USER_NOT_DELETED("Could not delete user!"),
    USER_UPDATED("User updated!"),
    USER_NOT_UPDATED("Could not update user!"),
    UNKNOWN_ERROR("Something went wrong");

    @Getter
    private final String message;

    Response(String message) {
        this.message = message;
    }
}
