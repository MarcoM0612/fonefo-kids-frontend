import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-form',
  imports: [ ReactiveFormsModule ],
  templateUrl: './new-form.html',
  styleUrl: './new-form.css'
})
export class tipNewForm {
  formData!: FormGroup

  constructor() {
    this.formData = new FormGroup({
      titulo: new FormControl(),
      contenido: new FormControl(),
      tipo: new FormControl(),
      edad: new FormControl(),
      autor: new FormControl()
    });
  }
  onSubmit () {
    console.log(this.formData.value)
  }
}
