/*
Uses authentication service to login/logout of app.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentification.service';

@Component ({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';

  constructor (private router: Router,
               private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.authenticationService.logout();  // Reset login status
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
        if (result === true) {
          this.router.navigate(['/']);  // Login success
        }
        else {                                    // Login fail
          this.error = 'Username or password incorrect';
          this.loading = false;
        }
      });
  }
}
