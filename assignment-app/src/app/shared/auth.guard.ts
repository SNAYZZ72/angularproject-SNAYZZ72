import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isAdmin().then(
    (authentifie) => {
      if (authentifie) {
        console.log('vous ête admin, vous pouvez passer')
        return true;
      } else {
        console.log('vous n\'êtes pas admin, vous ne pouvez pas passer');
        router.navigate(['/home']);
        return false;
      }
    });
};
