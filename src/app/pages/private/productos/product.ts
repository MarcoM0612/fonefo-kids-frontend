import { Component } from '@angular/core';
import { Producto } from '../../../services/product-services';
import { JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-productos',
  imports: [ RouterLink ],
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

    onDelete( id: string ){
      this.productService.deleteProduct( id ).subscribe({
        next: ( data )=> {
          console.log( data )
          this.ngOnInit()
        },
        error: (error )=>{
          console.error( error )
        },
        complete:() => {}
      })
    }
}
