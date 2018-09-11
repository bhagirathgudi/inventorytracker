import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryService } from './inventory.service';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
