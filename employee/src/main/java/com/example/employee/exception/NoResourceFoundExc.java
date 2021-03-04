package com.example.employee.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// import javassist.SerialVersionUID;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class NoResourceFoundExc extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public NoResourceFoundExc(String message) {
        super(message);
    }

}
