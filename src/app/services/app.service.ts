import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Occupation } from '../models/Occupation';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseAPIUrl = 'http://localhost:8081'
  constructor(private http:HttpClient) { }

  registerUser(form:{}): Observable<any>{
    return this.http.post<any>(`${this.baseAPIUrl}/auth/register`, form, {observe: 'response'})
  }

  loginUser(form:{}): Observable<any>{
    return this.http.post<any>(`${this.baseAPIUrl}/auth/login`, form, {observe: 'response'})
  }

  getOccupations(): Observable<Occupation[]>{
    console.log("Fetchhing from backend");
    return this.http.get<Occupation[]>(`${this.baseAPIUrl}/occupations`)
  }
}
