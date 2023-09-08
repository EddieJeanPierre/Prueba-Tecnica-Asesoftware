package com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.service;


import com.asesoftware.prueba_tecnica_backend.core.entity.Service;
import com.asesoftware.prueba_tecnica_backend.core.gateways.ServiceRepository;
import com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

@Repository
public class ServiceJPARepositoryAdapter
        extends AdapterOperations<Service, ServiceData, Integer, ServiceJPARepository>
        implements ServiceRepository {

    public ServiceJPARepositoryAdapter(ServiceJPARepository repository, ObjectMapper mapper) {
        super(repository, mapper, d -> mapper.map(d, Service.class));
    }
}
