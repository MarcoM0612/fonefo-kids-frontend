import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServices } from './auth-services';
import { environment } from '../../environments/environment';

@Injectable({ 
  providedIn: 'root'
})
export class Tip {
  environment: any


  constructor( private http: HttpClient, private authService: AuthServices ) {
    this.environment = environment;
  }

  registerTip ( newTip: any ) {
    return this.http.post(`${this.environment.apiUrl}/tips`, newTip, { headers: this.authService.getHeaders() }  )
  }
  
  getTips () {
    return this.http.get(`${this.environment.apiUrl}/tips`)
  }

  deleteTip (id: string ) {
    return this.http.delete( `${this.environment.apiUrl}/tips/` + id,  { headers: this.authService.getHeaders() } )
  }

}
