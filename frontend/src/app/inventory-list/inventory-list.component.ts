import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {

  pageTitle: string = 'Inventory List';
  inventoryFilterByCategory: string = 'soap';
  
  inventoryList: any[] = [
    {
      "name" :"Dove soap",
      "stock":100,
      "category":"soap",
      "price": 1.00,
      "currency" :"USD",
      "expiry": "01-21-2019"
    },
    {
      "name" :"Manchao Soup",
      "stock":100,
      "category":"soup",
      "price": 1.00,
      "currency" :"USD",
      "expiry": "01-21-2019"
    },
    {
      "name" :"Manchao Soup",
      "stock":100,
      "category":"soup",
      "price": 1.00,
      "currency" :"USD",
      "expiry": "01-21-2019"
    },
    {
      "name" :"Manchao Soup",
      "stock":100,
      "category":"soup",
      "price": 1.00,
      "currency" :"USD",
      "expiry": "01-21-2019"
    },
    {
      "name" :"Manchao Soup",
      "stock":100,
      "category":"soup",
      "price": 1.00,
      "currency" :"USD",
      "expiry": "01-21-2019"
    },
    {
      "name" :"Manchao Soup",
      "stock":100,
      "category":"soup",
      "price": 1.00,
      "currency" :"USD",
      "expiry": "01-21-2019"
    },
    {
      "name" :"Manchao Soup",
      "stock":100,
      "category":"soup",
      "price": 1.00,
      "currency" :"USD",
      "expiry": "01-21-2019"
    },
    {
      "name" :"Manchao Soup",
      "stock":100,
      "category":"soup",
      "price": 1.00,
      "currency" :"USD",
      "expiry": "01-21-2019"
    },
    {
      "name" :"Manchao Soup",
      "stock":100,
      "category":"soup",
      "price": 1.00,
      "currency" :"USD",
      "expiry": "01-21-2019"
    },
    {
      "name" :"Manchao Soup",
      "stock":100,
      "category":"soup",
      "price": 1.00,
      "currency" :"USD",
      "expiry": "01-21-2019"
    }
  ];

}
