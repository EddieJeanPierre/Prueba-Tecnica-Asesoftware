package com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.service;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ServiceJPARepository extends JpaRepository<ServiceData, Integer>, CrudRepository<ServiceData, Integer> {

}
