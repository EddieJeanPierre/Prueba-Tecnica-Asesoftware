package com.asesoftware.prueba_tecnica_backend.core.gateways;

import com.asesoftware.prueba_tecnica_backend.core.entity.Turn;

import java.util.List;

public interface TurnRepository {

    List<Turn> findAll();

    Turn save(Turn turn);

}
