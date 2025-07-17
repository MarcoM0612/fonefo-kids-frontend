import { Component, createEnvironmentInjector } from '@angular/core';
import { Producto } from '../../../services/product-services';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  imports: [ CurrencyPipe ],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {
  products: any[] = [];

  constructor( private productService: Producto ) {}

  ngOnInit() {
    this.productService.getProduct().subscribe({
      next: ( data ) => {
        console.log( data );
        this.products = data;
      },
      error: ( error ) => {
        console.error( error );
      },
      complete: () => {}
    })
  }
}
