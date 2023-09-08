package com.asesoftware.prueba_tecnica_backend.core.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class Commerce {
    private Integer idCommerce;
    private String nameCommerce;
    private Integer maxCapacity;
}
