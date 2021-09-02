import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  userApiUrl = 'https://61295f84068adf001789b88d.mockapi.io/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userApiUrl);
  }

  createUser(data: User): Observable<User> {
    return this.http.post<User>(this.userApiUrl, data);
  }

  editUser(id: string, data: User): Observable<User> {
    return this.http.put<User>(`${this.userApiUrl}/${id}`, data);
  }

  deleteUser(id: string): Observable<User> {
    return this.http.delete<any>(`${this.userApiUrl}/${id}`);
  }

  findUser(id: string): Observable<User> {
    return this.http.get<User>(`${this.userApiUrl}/${id}`);
  }
}
