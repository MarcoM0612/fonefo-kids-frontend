import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServices } from './auth-services';

@Injectable({
  providedIn: 'root'
})
export class Producto {

  constructor( private http: HttpClient, private authService: AuthServices) 
  {}

    registerProduct ( newProduct: any ) {
      return this.http.post( 'http://localhost:3000/api/product', newProduct, { headers: this.authService.getHeaders() } )
    }

    getProduct () {
      this.http.get( 'http://localhost:3000/api/product ')
    }
    
    deleteProduct ( id: string ){
      this.http.delete( 'http://localhost:3000/api/product/' + id, { headers: this.authService.getHeaders()
      } )
    }





  
}
