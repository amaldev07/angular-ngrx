import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './models/user.model';
import { delay } from 'rxjs/operators'; // Import delay operator


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
    return of(this.users).pipe(delay(2000));
  }
}