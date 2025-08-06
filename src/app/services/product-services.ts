import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServices } from './auth-services';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Producto {
  environment: any

  constructor( private http: HttpClient, private authService: AuthServices) {
    this.environment = environment
  }

    registerProduct ( newProduct: any ) {
      console.log( newProduct )
      return this.http.post( `${ this.environment.apiUrl }/product`, newProduct, { headers: this.authService.getHeaders() } )
    }

    getCategorieById( id: string ){
    return this.http.get(`${ this.environment.apiUrl }/product/` + id, { headers: this.authService.getHeaders() } )
  }

    getProduct () {
      return this.http.get <any> ( `${ this.environment.apiUrl }/product`)
    }
    
    deleteProduct ( id: string ){
      return this.http.delete( `${ this.environment.apiUrl }/product/` + id, { headers: this.authService.getHeaders() } )
    }

    updateCategorieById( id: string, updatedProduct: any ){
    return this.http.patch(`${ this.environment.apiUrl }/product/` +id , updatedProduct ,{ headers: this.authService.getHeaders() } )
  }





  
}
