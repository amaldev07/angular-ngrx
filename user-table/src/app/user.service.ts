import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private users: User[] = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Sam Wilson', age: 20 },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users); // Simulating an API response
  }
}