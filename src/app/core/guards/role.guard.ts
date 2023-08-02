import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class roleGuard  {

  constructor(
    private cookieService: CookieService,
    private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.roleCookie();
  }

  roleCookie(): boolean {

  try{

    if (this.cookieService.get('role') == "admin"){
      return true
    }else{
      this.router.navigate(['/', 'tracks'])
    }
    return false

  } catch (e) {
    console.log('Error🔴: ', e);
    return false
  }

  }

}
