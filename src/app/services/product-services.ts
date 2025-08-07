import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServices } from './auth-services';
import { environment } from '../../environments/environment';
import { ProductInterface } from '../interfaces/product-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Producto {
  environment: any

  constructor( private http: HttpClient, private authService: AuthServices) {
    this.environment = environment
  }

    registerProduct ( newProduct: ProductInterface ) : Observable<ProductInterface> {
      console.log( newProduct )
      return this.http.post <ProductInterface>( `${ this.environment.apiUrl }/product`, newProduct, { headers: this.authService.getHeaders() } )
    }

    getCategorieById( id: string ) : Observable<ProductInterface>{
    return this.http.get <ProductInterface> (`${ this.environment.apiUrl }/product/` + id, { headers: this.authService.getHeaders() } )
  }

    getProduct () : Observable<Array<ProductInterface>>{
      return this.http.get <Array<ProductInterface>> ( `${ this.environment.apiUrl }/product`)
    }
    
    deleteProduct ( id: string ) : Observable<ProductInterface> {
      return this.http.delete <ProductInterface> ( `${ this.environment.apiUrl }/product/` + id, { headers: this.authService.getHeaders() } )
    }

    updateCategorieById( id: string, updatedProduct: ProductInterface  ) : Observable<ProductInterface> {
    return this.http.patch < ProductInterface > (`${ this.environment.apiUrl }/product/` +id , updatedProduct ,{ headers: this.authService.getHeaders() } )
  }


  
}
