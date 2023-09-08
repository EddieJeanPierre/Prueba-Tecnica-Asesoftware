package com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.turn;


import com.asesoftware.prueba_tecnica_backend.core.entity.Turn;
import com.asesoftware.prueba_tecnica_backend.core.gateways.TurnRepository;
import com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.helper.AdapterOperations;
import org.reactivecommons.utils.ObjectMapper;
import org.springframework.stereotype.Repository;

@Repository
public class TurnJPARepositoryAdapter
        extends AdapterOperations<Turn, TurnData, Integer, TurnJPARepository>
        implements TurnRepository {

    public TurnJPARepositoryAdapter(TurnJPARepository repository, ObjectMapper mapper) {
        super(repository, mapper, d -> mapper.map(d, Turn.class));
    }
}
