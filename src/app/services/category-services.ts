import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServices } from './auth-services';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Categoria {
  environment: any;

  constructor( private http: HttpClient, private authService: AuthServices ) {
    this.environment = environment
  }

  registerCatergorie( newCategorie: any ){
    return this.http.post(`${this.environment.apiUrl}/categories`, newCategorie, { headers: this.authService.getHeaders() } )
  }

  getCategories (){
    return this.http.get<any>(`${this.environment.apiUrl}/categories`, { headers: this.authService.getHeaders() })
  }

  getCategorieById( id: string ){
    return this.http.get(`${this.environment.apiUrl}/categories/` + id, { headers: this.authService.getHeaders() } )
  }

  deleteCategorieById( id: string ){
    return this.http.delete(`${this.environment.apiUrl}/categories/` +id ,{ headers: this.authService.getHeaders() } )
  }

  updateCategorieById( id: string, updatedCategorie: any ){
    return this.http.patch(`${this.environment.apiUrl}/categories/` +id , updatedCategorie ,{ headers: this.authService.getHeaders() } )
  }
}
