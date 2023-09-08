package com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.commerce;


import com.asesoftware.prueba_tecnica_backend.core.entity.Commerce;
import com.asesoftware.prueba_tecnica_backend.core.gateways.CommerceRepository;
import com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

@Repository
public class CommerceJPARepositoryAdapter
        extends AdapterOperations<Commerce, CommerceData, Integer, CommerceJPARepository>
        implements CommerceRepository {

    public CommerceJPARepositoryAdapter(CommerceJPARepository repository, ObjectMapper mapper) {
        super(repository, mapper, d -> mapper.map(d, Commerce.class));
    }
}
