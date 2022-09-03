package com.ericFeng.customer;

public record CustomerRegistrationRequest(
        String firstName,
        String lastName,
        String email) {

}
