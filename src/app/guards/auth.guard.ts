/*
Prevents unautheticated users from accessing restricted routes
 */

import { Injectable } from '@angular/core';

// CanActivate: Interface that class can implement to be a guard
// deciding if a route can be activated
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private router: Router) {}

  canActivate() {
    if (localStorage.getItem('currentUser')) {
      return true;          // Logged in
    }

    // Not logged in, redirect to login page
    this.router.navigate(['/login']);
    return false;
  }
}
