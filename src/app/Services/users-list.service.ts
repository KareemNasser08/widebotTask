import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor(private _HttpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this._HttpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: number): Observable<any> {
    return this._HttpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
