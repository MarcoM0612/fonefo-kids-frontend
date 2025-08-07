import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServices } from '../../../services/auth-services';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

  registerData: FormGroup;
  errorMsg: string = ''

  constructor(private authService: AuthServices, private fb: FormBuilder, private router: Router){
    this.registerData = this.fb.group({
      name: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]}, {validators: this.passwordsValidator})
  }

  passwordsValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }

  onSubmit(){
    if(this.registerData.valid){
      this.authService.registerUser(this.registerData.value).subscribe({
        next: ( data ) => {
          console.log('El usuario se registro correctamente');
          console.log(data);

          this.router.navigate(['login'])
          this.registerData.reset()
        },
        error: (error) => {
          console.error(error)
          this.errorMsg = error.error?.error || 'Error al registrar el usuario'
        },
      })
    }
  }

}

