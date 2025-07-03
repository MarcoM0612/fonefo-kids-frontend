import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthServices } from '../services/auth-services';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthServices )  //Equivalente
  const access:boolean = false

  authService.verifyAuthenticateUser().subscribe()
  
  return true;
}
