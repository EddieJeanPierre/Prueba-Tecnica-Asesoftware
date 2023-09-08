package com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.commerce;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface CommerceJPARepository extends JpaRepository<CommerceData, Integer>, CrudRepository<CommerceData, Integer> {

}
