import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requiredRole = route.data['role'] as 'user' | 'admin';
  const isLogged = authService.isLogged();
  const isAdmin = await authService.isAdmin();

  if (!isLogged) {
    console.log('vous n\'êtes pas connecté, redirection vers la page de connexion');
    router.navigate(['/login']);
    return false;
  } else if (requiredRole === 'admin' && !isAdmin) {
    console.log('vous n\'êtes pas admin, accès refusé');
    router.navigate(['/home']);
    return false;
  }

  return true;
};
