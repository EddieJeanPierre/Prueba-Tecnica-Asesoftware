package com.asesoftware.prueba_tecnica_backend.core.usecase;

import com.asesoftware.prueba_tecnica_backend.core.gateways.ServiceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ServiceUseCase {

    private final ServiceRepository serviceRepository;

    public List<com.asesoftware.prueba_tecnica_backend.core.entity.Service> getServiceList() {
        return serviceRepository.findAll();
    }

}
