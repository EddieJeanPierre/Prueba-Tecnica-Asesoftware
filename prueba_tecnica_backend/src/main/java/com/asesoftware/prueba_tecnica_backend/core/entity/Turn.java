package com.asesoftware.prueba_tecnica_backend.core.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class Turn {
    private Integer idTurn;
    private Integer idService;
    private String dateTurn;
    private String initTime;
    private String finalTime;
    private Boolean status;
}
