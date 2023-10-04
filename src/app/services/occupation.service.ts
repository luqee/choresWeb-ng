import { Injectable } from '@angular/core';
import { Occupation } from '../Occupation';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OccupationService {
  private apiUrl = 'http://localhost:8081/occupations'
  constructor(private http:HttpClient) { }

  getOccupations(): Observable<Occupation[]>{
    console.log("Fetchhing from backend");
    return this.http.get<Occupation[]>(this.apiUrl)
  }
}
