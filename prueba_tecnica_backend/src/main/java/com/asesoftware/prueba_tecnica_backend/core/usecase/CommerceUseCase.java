package com.asesoftware.prueba_tecnica_backend.core.usecase;

import com.asesoftware.prueba_tecnica_backend.core.entity.Commerce;
import com.asesoftware.prueba_tecnica_backend.core.gateways.CommerceRepository;

import java.util.List;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CommerceUseCase {

    private final CommerceRepository commerceRepository;

    public List<Commerce> getCommerceList() {
        return commerceRepository.findAll();
    }

}
