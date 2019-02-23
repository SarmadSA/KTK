package com.activekids.web.responses;

import lombok.Getter;

public enum Response {
    USER_CREATED("User created!"),
    USER_NOT_CREATED("Could not create User!"),
    USER_DELETED("User deleted!"),
    UNKNOWN_ERROR("Something went wrong");

    @Getter
    private final String message;

    Response(String message) {
        this.message = message;
    }
}
