import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { UserInterface } from '../interface/user-interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<UserInterface[]>(`${this.apiURL}users`);
  }

  getUsersId(id: number) {
    return this.http.get<UserInterface>(`${this.apiURL}users/${id}`);
  }



}
