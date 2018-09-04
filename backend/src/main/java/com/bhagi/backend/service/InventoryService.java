package com.bhagi.backend.service;

import com.bhagi.backend.controller.request.InventoryRequest;
import com.bhagi.backend.model.Inventory;
import com.bhagi.backend.reposiitory.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component
public class InventoryService {

    @Autowired
    private InventoryRepository inventoryRepository;

    public void createInventory(InventoryRequest inventoryRequest) {
        Inventory inventory = new Inventory();
        inventory.setCompanyName(inventoryRequest.getCompanyName());
        inventory.setExpiryDate(inventoryRequest.getExpiryDate());
        inventory.setInventoryName(inventoryRequest.getInventoryName());
        inventory.setStock(inventoryRequest.getStock());
        inventory.setCreatedBy(inventoryRequest.getCreatedBy());
        inventory.setCreatedDate(new Date());
        inventoryRepository.save(inventory);
    }

    public List<Inventory> getInventoryListforCompany(String companyName) {
        return inventoryRepository.findByCompanyName(companyName);
    }
}
