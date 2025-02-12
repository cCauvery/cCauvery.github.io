import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class InstitutionGuard implements CanActivate {
  private allowedInstitutions = ['iisc', 'nitt'];

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const institution = route.params['institution']?.toLowerCase();
    if (!this.allowedInstitutions.includes(institution)) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
