import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServices } from './auth-services';

@Injectable({ 
  providedIn: 'root'
})
export class Tip {


  constructor( private http: HttpClient, private authService: AuthServices ) { }

  registerTip ( newTip: any ) {
    return this.http.post('http://localhost:3000/api/tips', newTip, { headers: this.authService.getHeaders() }  )
  }
  
  getTips () {
    return this.http.get('http://localhost:3000/api/tips')
  }

  deleteTip (id: string ) {
    return this.http.delete( 'http://localhost:3000/api/tips/' + id,  { headers: this.authService.getHeaders() } )
  }

}
