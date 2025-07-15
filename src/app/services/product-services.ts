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
      console.log( newProduct )
      return this.http.post( 'http://localhost:3000/api/product', newProduct, { headers: this.authService.getHeaders() } )
    }

    getCategorieById( id: string ){
    return this.http.get('http://localhost:3000/api/product/' + id, { headers: this.authService.getHeaders() } )
  }

    getProduct () {
      return this.http.get <any> ( 'http://localhost:3000/api/product ')
    }
    
    deleteProduct ( id: string ){
      return this.http.delete( 'http://localhost:3000/api/product/' + id, { headers: this.authService.getHeaders() } )
    }

    updateCategorieById( id: string, updatedProduct: any ){
    return this.http.patch('http://localhost:3000/api/product/' +id , updatedProduct ,{ headers: this.authService.getHeaders() } )
  }





  
}
