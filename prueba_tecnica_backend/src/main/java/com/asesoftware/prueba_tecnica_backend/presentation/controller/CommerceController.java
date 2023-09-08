package com.asesoftware.prueba_tecnica_backend.presentation.controller;

import com.asesoftware.prueba_tecnica_backend.core.entity.Commerce;
import com.asesoftware.prueba_tecnica_backend.core.usecase.CommerceUseCase;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.http.HttpStatus;
@RestController
@RequestMapping(value = "/comercios", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class CommerceController {

    private final CommerceUseCase commerceUseCase;

    @GetMapping("/lista")
    public ResponseEntity<List<Commerce>> getCommerceList() {
        return ResponseEntity.status(HttpStatus.OK).body(commerceUseCase.getCommerceList());
    }
}