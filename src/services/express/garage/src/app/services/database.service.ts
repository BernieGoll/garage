import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class DatabaseService {

  constructor(private http: HttpClient) { }

  registerUser(user) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.http.post('/api/users', user, {headers: headers})
  }

  getUsers() {
    return this.http.get<any[]>('/api/users');
  }

  getCarsServiceMethod() {
    // Return an Observable
    return this.http.get<any[]>('/api/cars');
  }

}
