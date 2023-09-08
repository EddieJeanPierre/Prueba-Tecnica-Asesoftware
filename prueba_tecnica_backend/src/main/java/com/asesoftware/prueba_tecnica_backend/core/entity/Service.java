package com.asesoftware.prueba_tecnica_backend.core.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class Service {
    private Integer idService;
    private Integer idCommerce;
    private String nameService;
    private String initTime;
    private String finalTime;
    private Integer duration;
}
