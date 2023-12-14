import { CanActivateFn, Router } from '@angular/router';
import {inject} from '@angular/core'
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService)
  const router = inject(Router)

  return authService.isLoggedIn().subscribe((val: any) => {
    if(val){
      return true
    }else{
      return router.navigateByUrl('/signin')
    }
  })
};
