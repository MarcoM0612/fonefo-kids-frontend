import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServices } from './auth-services';

@Injectable({
  providedIn: 'root'
})
export class Categoria {

  constructor( private http: HttpClient, private authService: AuthServices ) {

  }

  registerCatergorie( newCategorie: any ){
    return this.http.post('http://localhost:3000/api/categories', newCategorie, { headers: this.authService.getHeaders() } )
  }

  getCategories (){
    return this.http.get<any>('http://localhost:3000/api/categories', { headers: this.authService.getHeaders() })
  }

  getCategorieById( id: string ){
    return this.http.get('http://localhost:3000/api/categories/' + id, { headers: this.authService.getHeaders() } )
  }

  deleteCategorieById( id: string ){
    return this.http.delete('http://localhost:3000/api/categories/' +id ,{ headers: this.authService.getHeaders() } )
  }

  updateCategorieById( id: string, updatedCategorie: any ){
    return this.http.patch('http://localhost:3000/api/categories/' +id , updatedCategorie ,{ headers: this.authService.getHeaders() } )
  }
}
