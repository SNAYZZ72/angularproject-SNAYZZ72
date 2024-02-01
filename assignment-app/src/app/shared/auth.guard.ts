import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const authentifie = await authService.isAdmin();
  if (authentifie) {
    console.log('vous ête admin, vous pouvez passer');
    return true;
  } else {
    console.log('vous n\'êtes pas admin, vous ne pouvez pas passer');
    router.navigate(['/home']);
    return false;
  }

};


