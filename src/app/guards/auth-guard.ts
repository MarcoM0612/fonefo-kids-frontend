import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServices } from '../services/auth-services';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject( AuthServices )  //Equivalente
  const router= inject(Router)

  return authService.verifyAuthenticateUser().pipe(
    map(( data ) => {
      console.log( 'gard', data )

      if( !data ){
        router.navigateByUrl('register')
        return false
      }

      return true
    }),
    catchError(() => {
      return of (false)
    })
  )


}
