import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tips',
  imports: [ ReactiveFormsModule ],
  templateUrl: './tips.html',
  styleUrl: './tips.css'
})
export class Tips {
  formData!: FormGroup 

constructor () {
  this.formData = new FormGroup ({
    titulo: new FormControl(),
    contenido: new FormControl(),
    tipo: new FormControl(),
    edad: new FormControl(),
    autor: new FormControl()
  });
}
}
