package com.asesoftware.prueba_tecnica_backend.infraestructure.persistence.repository.commerce;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
@Table(name = "comercios")
public class CommerceData implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id_comercio")
    private Integer idCommerce;
    @Column(name = "nom_comercio")
    private String nameCommerce;
    @Column(name = "aforo_maximo")
    private Integer maxCapacity;

}
