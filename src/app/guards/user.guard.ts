import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  console.log(route.url);
  console.log(state);
  
  
  // : Observable
return authService.isLoggedIn().subscribe((val: any) => {
    if(val){
      return router.navigateByUrl('')
    }else{
      return true
    }
  })


  
};
