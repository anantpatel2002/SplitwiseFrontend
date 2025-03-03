import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { tap } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  httpClient = inject(HttpClient);
  
  constructor() {}
  
  login(username:string, password:string) {
    return this.httpClient.post('http://localhost:8080/auth/login', {
      username: username,
      password: password
    },{
      responseType:'text',
      withCredentials: true
    });
  }
}