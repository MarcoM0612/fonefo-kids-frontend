import { Component } from '@angular/core';
import { Producto } from '../../../services/product-services';


@Component({
  selector: 'app-productos',
  imports: [  ],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Productos {
    products: any []= []

    constructor( private productService: Producto){}

  ngOnInit(){
    this.productService.getProduct().subscribe({
      next: (data) => {
        console.log( data )
        this.products = data
      },
      error: (error) => {
        console.error(error)
      },
      complete: () => {}
    })
  }
}
