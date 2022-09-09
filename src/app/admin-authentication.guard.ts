import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { userData } from './test-utils';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationGuard implements CanActivate {
  constructor(private router : Router){

  }
  canActivate(): boolean
  {
    const userString=localStorage.getItem('userData');
    if(!userString) return false;
    
    const userData = JSON.parse(userString);
    if(userData.role == 'SuperAdmin')
    {
      return true;

    }
    else{
      this.router.navigate(['/']);
      return false;

    }}
}
