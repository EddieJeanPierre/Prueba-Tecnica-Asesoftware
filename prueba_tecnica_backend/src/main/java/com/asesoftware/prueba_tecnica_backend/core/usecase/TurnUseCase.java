package com.asesoftware.prueba_tecnica_backend.core.usecase;

import com.asesoftware.prueba_tecnica_backend.core.entity.Turn;
import com.asesoftware.prueba_tecnica_backend.core.gateways.ServiceRepository;
import com.asesoftware.prueba_tecnica_backend.core.gateways.TurnRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TurnUseCase {

    private final TurnRepository turnRepository;

    public List<Turn> getTurnList() {
        return turnRepository.findAll();
    }

    public Turn createTurn(Turn turn) {
        return turnRepository.save(turn);
    }

}
