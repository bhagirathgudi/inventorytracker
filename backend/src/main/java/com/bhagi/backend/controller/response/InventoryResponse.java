package com.bhagi.backend.controller.response;

import com.bhagi.backend.model.Inventory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class InventoryResponse {

    private String companyName;
    private List<Inventory> inventories;
}
