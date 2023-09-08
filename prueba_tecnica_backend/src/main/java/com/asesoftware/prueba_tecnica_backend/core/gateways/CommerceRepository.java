package com.asesoftware.prueba_tecnica_backend.core.gateways;

import com.asesoftware.prueba_tecnica_backend.core.entity.Commerce;

import java.util.List;

public interface CommerceRepository {

    List<Commerce> findAll();

}
