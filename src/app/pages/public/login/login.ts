import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthServices } from '../../../services/auth-services';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  //se a creado el atributo FormData
  loginData!: FormGroup  // Este es el nombre del formulario
  errorMessage: string = ''

  constructor(private authService: AuthServices, private router: Router) {
    this.loginData = new  FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(){
    if(this.loginData.valid){
      this.authService.loginUser(this.loginData.value).subscribe({
        next: ( isAuthenticated ) => {
          console.log( isAuthenticated );
          this.errorMessage = ''

          if( isAuthenticated ) {
            console.log( 'Login exitoso... Redireccionando a dashboard' );
            this.router.navigateByUrl('/dashboard');
          }
          else {
            console.log( 'Login fallido... Mostrando mensaje de error' );
            this.errorMessage = 'Credenciales invalidas';
            this.router.navigateByUrl('/login');
          }

        },
        error: (error) => {
          console.error(error)
          this.errorMessage = error.error?.error || 'Error al loguearse. Inténta nuevamente.'
          },
        complete: () => {this.loginData.reset()}
      })
    }
  }
}
