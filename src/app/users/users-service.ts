import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of, pipe, tap } from 'rxjs';
import { User } from '../shared/interfaces/user-interface';

interface SeedResponse {
  status: number;
  message: string;
}
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient);

  usersCache = new Map<string, User[]>();

  constructor() {}

  getUsers(limit: number = 10, offset: number = 0): Observable<User[] | undefined> {
    if (this.usersCache.has(`users-${limit}-${offset}`)) {
      return of(this.usersCache.get(`users-${limit}-${offset}`));
    }
    return this.http.get<User[]>(`http://localhost:3000/api/users`, {
      params: {
        limit: limit,
        offset: offset
      }
    }).pipe(tap(users => {
      this.usersCache.set(`users-${limit}-${offset}`, users)
    }))
  }

  executeSeed(): Observable<SeedResponse> {
    this.usersCache.clear();
    return this.http.get<SeedResponse>(`http://localhost:3000/api/seed`);
  }
}
