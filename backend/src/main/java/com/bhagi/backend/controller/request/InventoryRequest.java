package com.bhagi.backend.controller.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryRequest {
    private String inventoryName;
    private String companyName;
    private String createdBy;
    private Long stock;
    private Date expiryDate;
}
