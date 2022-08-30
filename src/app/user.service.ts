import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL="http://localhost:8080/api/v1/user"

  constructor(private httpclient:HttpClient) { }
  getUserList():Observable<User[]>{
    return this.httpclient.get<User[]>(`${this.baseURL}`);
  }
  createUser(user:User): Observable<object>{
    return this.httpclient.post(`${this.baseURL}`,user); 
  }
  getUserById(id: number): Observable<User>{
    return this.httpclient.get<User>(`${this.baseURL}/${id}`);
  }
  updateUser(id: number, user: User): Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
  loginUser(emailid: String, password: String): Observable<Object>{
    
    return this.httpclient.post(`${this.baseURL}/login`, {
      emailid : emailid ,
      password : password
    })
  }

  getLoggedInUser(){
    const userData = localStorage.getItem('userData')
    if (!userData) return null;

    return JSON.parse(userData);
  }
  
}
