package com.asesoftware.prueba_tecnica_backend.presentation.controller;

import com.asesoftware.prueba_tecnica_backend.core.entity.Service;
import com.asesoftware.prueba_tecnica_backend.core.usecase.ServiceUseCase;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/servicios", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class ServiceController {

    private final ServiceUseCase serviceUseCase;

    @GetMapping("/lista")
    public ResponseEntity<List<Service>> getServiceList() {
        return ResponseEntity.status(HttpStatus.OK).body(serviceUseCase.getServiceList());
    }
}