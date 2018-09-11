import { Component, OnInit } from '@angular/core';
import { Inventory } from '../inventory/inventory';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {
  constructor(private inventoryService : InventoryService) {
  }
  pageTitle: string = 'Inventory List';
  inventoryFilterByCategory: string = 'soap';

  inventoryList: Inventory[];
  ngOnInit(): void {
    this.inventoryService.getInventory().subscribe(
        p => this.inventoryList = p
    );
  }
}
