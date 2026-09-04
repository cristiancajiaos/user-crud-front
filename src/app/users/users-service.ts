import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  constructor() {}

  getUsers(limit: number, offset: number): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:3000/api/users`, {
      params: {
        limit: 10,
        offset: 0
      }
    })
  }
}
