import { Component } from '@angular/core';
import { Categoria } from '../../../services/category-services';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css'
})
export class Categories {
  categories: any[] = [];

  constructor( public categoryService: Categoria ) {}

  ngOnInit(){
    this.categoryService.getCategories().subscribe({
      next: ( data ) => {
        console.log( data );
        this.categories = data;
      },
      error: ( error ) => {
        console.error( error );
      }
    });
  }

  onDelete( id: string ) {
    this.categoryService.deleteCategorieById( id ).subscribe({
      next: ( data ) => {
        console.log( data );
        this.ngOnInit();
      },
      error: ( error ) => {
        console.error( error );
      }
    });
  }
}
