package com.asesoftware.prueba_tecnica_backend.core.gateways;

import com.asesoftware.prueba_tecnica_backend.core.entity.Service;

import java.util.List;

public interface ServiceRepository {

    List<Service> findAll();

}
