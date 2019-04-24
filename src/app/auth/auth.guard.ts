import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(state, 'state in auth guard');
    console.log(window.location, 'next in auth guard');
    if (this.userService.loggedInUser) { return true; }
    this.userService.redirectUrl = state.url;
    this.router.navigate(['/login']);
    return false;
  }
}
