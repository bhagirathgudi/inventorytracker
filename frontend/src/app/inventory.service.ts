import { Inventory } from './inventory/inventory';
import {Injectable} from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable()
export class InventoryService {

  private inventoryUrl = 'http://localhost:8082/inventory?companyName=walmart';
  constructor(private httpClient: HttpClient) { }
    
  getInventory():Observable<Inventory[]> {
    return this.httpClient.get<Inventory[]>(this.inventoryUrl).pipe(
      tap(data => console.log('All: '+ JSON.stringify(data))),
      catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse){
      return throwError(err.message);
  }

}
