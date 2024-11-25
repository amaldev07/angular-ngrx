import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { selectError, selectLoading, selectUsers } from '../store/user/user.selectors';
import { Store } from '@ngrx/store';
import { loadUsers, loadUsersSuccess } from '../store/user/user.actions';
import { map, startWith } from 'rxjs/operators';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  // users: User[] = [];
  /*   displayedColumns: string[] = ['id', 'name', 'age'];
  
    constructor(private userService: UserService) { }
  
    ngOnInit(): void {
      this.fetchUsers();
    }
  
    fetchUsers(): void {
      this.userService.getUsers().subscribe((data: User[]) => {
        this.users = data;
      });
    } */
  users: User[] = [];
  users$: Observable<User[]>;
  loading$: Observable<boolean> = this.store.select(selectLoading);
  error$: Observable<string | null> = this.store.select(selectError);


  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers).pipe(
      map(users => users || []), // Ensure non-null value
      startWith([]) // Emit an empty array initially
    );
  }
  showTable = false;
  ngOnInit(): void {
    this.users$.subscribe(data => {
      this.users = data;
    })
    this.store.dispatch(loadUsers());
  /*   const mockUsers: User[] = [
      { id: 1, name: 'John Doe', age: 25 },
      { id: 2, name: 'Jane Smith', age: 30 },
      { id: 3, name: 'Sam Wilson', age: 20 },
    ];
    setTimeout(() => {
      this.store.dispatch(loadUsersSuccess({ users: mockUsers }));

    }, 2000); */
  }
}
