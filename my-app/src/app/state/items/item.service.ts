import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root', // Makes this service available throughout the app
})
export class ItemService {
  private baseUrl = 'http://demo2533026.mockable.io/items'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Fetch all items
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl);
  }

  // Add a new item
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item);
  }

  // Update an existing item
  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/${item.id}`, item);
  }

  // Delete an item
//   deleteItem(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.baseUrl}/${id}`);
//   }
}
