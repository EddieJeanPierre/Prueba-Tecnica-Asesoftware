package com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.turn;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface TurnJPARepository extends JpaRepository<TurnData, Integer>, CrudRepository<TurnData, Integer> {

}
