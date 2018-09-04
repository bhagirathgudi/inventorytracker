package com.bhagi.backend.reposiitory;

import com.bhagi.backend.model.Inventory;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface InventoryRepository extends CrudRepository<Inventory, Long> {
    List<Inventory> findByCompanyName(String companyName);
}
