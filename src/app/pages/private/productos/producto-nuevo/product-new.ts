import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../../../services/product';
import {  Router } from '@angular/router';
import { Categoria } from '../../../../services/category';

@Component({
  selector: 'app-producto-nuevo',
  imports: [ ReactiveFormsModule ],
  templateUrl: './product-new.html',
  styleUrl: './product-new.css'
})
export class ProductoNuevo {
  formData!: FormGroup;
  products: any = [];

  constructor (
    private productservice: Producto,
    private router: Router,
    private categiriasService: Categoria

  ) {
    this.formData = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50) ] ),
      descripcion: new FormControl( '', [ Validators.required, Validators.minLength(5)]),
      price: new FormControl( 0 , [ Validators.required, Validators.min( 0 ) ] ),
      stock: new FormControl ( 1 , [Validators.required, Validators.min(1), Validators.max(100) ]),
      urlImage: new FormControl(),
      state: new FormControl ( true, [ Validators.required ]), 
      rangoEdad: new FormControl ('', [ Validators.required]),
      categoria: new FormControl  ('')
    })
  }

    onSubmit (){
      console.log(
        this.formData.valid,
        this.formData.invalid,
        this.formData.pristine,
        this.formData.dirty,
        this.formData.touched
      )
      console.log(this.formData.value)
      if( this.formData.valid ){
        this.productservice.registerProduct( this.formData.value ).subscribe({
          next: ( data ) => {
            console.log( data)
            this.router.navigate (['admin', 'product'])
          },
          error: ( error ) => {
            console.error ( error )
          },
          complete: () => {
            this.formData.reset() //limpia los datos del formulario
          }
        })
      }
      this.formData.reset();
    }

    ngOnInit(){
      this.categiriasService.getCategories().subscribe({
        next:( data ) => {
          console.log( data );
          this.products = data
        },
        error: ( error ) => {
          console.error( error )
        },
        complete: () => {
          console.log( 'complete')
        }
      })
    }



    ngOnDestroy (){
      console.log( 'ngOnDestroy');
    }



}
