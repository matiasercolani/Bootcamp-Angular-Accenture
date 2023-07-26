import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    // console.log('sendCredentials environment.api: ', environment.api, body);
    return this.http.post(`${this.URL}/api/1.0/auth/login`, body)//ER94
  }

  suma(a: number, b: number): number {
    return a + b
  }
}
