package com.asesoftware.prueba_tecnica_backend.presentation.controller;

import com.asesoftware.prueba_tecnica_backend.core.entity.Turn;
import com.asesoftware.prueba_tecnica_backend.core.usecase.TurnUseCase;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/turnos", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class TurnController {

    private final TurnUseCase turnUseCase;

    @GetMapping("/lista")
    public ResponseEntity<List<Turn>> getTurnList() {
        return ResponseEntity.status(HttpStatus.OK).body(turnUseCase.getTurnList());
    }

    @PostMapping(path = "/crear")
    public ResponseEntity<Turn> createTurn(
            @Parameter(required = true)
            @RequestBody Turn turn
    ) {
        return ResponseEntity.status(HttpStatus.OK).body(turnUseCase.createTurn(turn));
    }
}