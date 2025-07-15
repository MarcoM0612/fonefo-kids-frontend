import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Categoria } from '../../../../services/category-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-new',
  imports: [ ReactiveFormsModule ],
  templateUrl: './category-new.html',
  styleUrl: './category-new.css'
})
export class CategoryNew {
  formData!:FormGroup;

  constructor( private categoryService: Categoria, private router: Router ){
    // Declarar formulario donde se van a agrupar los campos 
    this.formData = new FormGroup ({

      name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)] ),

    })
  }

  onSubmit(){
    // Verificando si el formulario es valido. 
    if ( this.formData.valid){  
      console.log( this.formData.value );

        this.categoryService.registerCatergorie( this.formData.value ).subscribe({
          next: ( data ) => {
            console.log( data)
            this.router.navigateByUrl('/admin/categories')
          },
          error: ( error ) => {
            console.error ( error )
          },
          complete: () => {
            this.formData.reset()
          }
        });
    }
  }



}
