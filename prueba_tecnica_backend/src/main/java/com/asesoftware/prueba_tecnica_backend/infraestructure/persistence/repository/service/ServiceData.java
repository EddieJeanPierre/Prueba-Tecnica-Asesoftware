package com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.service;

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
@Table(name = "servicios")
public class ServiceData implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id_servicio")
    private Integer idService;
    @Column(name = "id_comercio")
    private Integer idCommerce;
    @Column(name = "nom_servicio")
    private String nameService;
    @Column(name = "hora_apertura")
    private String initTime;
    @Column(name = "hora_cierre")
    private String finalTime;
    @Column(name = "duracion")
    private Integer duration;

}
