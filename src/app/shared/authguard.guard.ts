import { CanActivate, Router } from '@angular/router'; 
import { AuthService } from '../Services/shared/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {} 

  canActivate(): boolean {
    if (!this.authService.getToken()) {
      this.router.navigateByUrl('/login');
      return false; 
    }
    return true; 
}
}
