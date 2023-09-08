package com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.turn;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "turnos")
public class TurnData implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_turno")
    private Integer idTurn;
    @Column(name = "id_servicio")
    private Integer idService;
    @Column(name = "fecha_turno")
    private String dateTurn;
    @Column(name = "hora_inicio")
    private String initTime;
    @Column(name = "hora_fin")
    private String finalTime;
    @Column(name = "estado")
    private Boolean status;

}
