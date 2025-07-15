import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Producto } from '../../../../services/product-services';
import {  Router } from '@angular/router';
import { Categoria } from '../../../../services/category-services';
import { AgeRange } from '../../../../services/age-range';

@Component({
  selector: 'app-producto-nuevo',
  imports: [ ReactiveFormsModule ],
  templateUrl: './product-new.html',
  styleUrl: './product-new.css'
})
export class ProductoNuevo {
  formData!: FormGroup;
  products: any = [];
  ageRanges: any[] = [];

  constructor (
    private productService: Producto,
    private router: Router,
    private categiriasService: Categoria,
    private ageRangeService: AgeRange

  ) {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)] ),
      description: new FormControl( '', [Validators.required, Validators.minLength(5)]),
      price: new FormControl( 0 , [ Validators.required ] ),
      stock: new FormControl ( 1 , []),
      urlImage: new FormControl(),
      state: new FormControl ( true, [ Validators.required ]), 
      ageRanges: new FormControl ('', [ ]),
      category: new FormControl  ('')
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
        this.productService.registerProduct( this.formData.value ).subscribe({
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

    }

    ngOnInit(){
      this.loadCategories();
      this.loadAgeRanges();
    }

    loadAgeRanges() {
      this.ageRangeService.getAgeRanges().subscribe({
        next: ( data ) => {
          console.log( data );
          this.ageRanges = data;
        },
        error: ( error ) => {
          console.error( error );
        },
        complete: () => {}
      })
    }
  
    loadCategories() {
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
