import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgeRange {
  environment: any

  constructor( private http: HttpClient) { 
    this.environment = environment; 
  }

  getAgeRanges() {
    return this.http.get<any>( `${ this.environment.apiUrl }/agerange` )
  }
}
