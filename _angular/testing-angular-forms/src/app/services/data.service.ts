import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private htt: HttpClient) {}

  getAllUsers() {
    //return this.htt.get('https://jsonplaceholder.typicode.com/users');
    return this.htt.get('api/users');
  }

  getUserById(id: number) {
    return this.htt.get('api/users/' + id);
  }

  updateUser(id: number, user: any) {
    return this.htt.put('api/users/' + id, user);
  }
}
