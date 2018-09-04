package com.bhagi.backend.controller;

import com.bhagi.backend.controller.request.InventoryRequest;
import com.bhagi.backend.controller.response.InventoryResponse;
import com.bhagi.backend.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RequestMapping("/inventory")
@RestController
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    @PostMapping("/create")
    public void createInventory(@RequestBody InventoryRequest inventory){
        inventoryService.createInventory(inventory);
    }

    @GetMapping
    public InventoryResponse getInventory(@RequestParam(name = "companyName") String companyName) {
        InventoryResponse inventoryResponse = new InventoryResponse();
        inventoryResponse.setCompanyName(companyName);
        inventoryResponse.setInventories(inventoryService.getInventoryListforCompany(companyName));
        return inventoryResponse;
    }
}
