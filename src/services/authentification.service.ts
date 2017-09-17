/*
Used to log in and out of app.
Log in: Post user credentials to API and check res for jwt. If there is
  one, then authentication was successful & user details added to local
  storage. Token saved & used by other services to set auth header of
  http req.
User remains logged in until logged out.
 */

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

// Observables similar to Promises but can handle multi values over
// time and can be cancelled
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthentificationService {
  public token: String;

  constructor (private  http: Http) {

    // Set token if saved in local storage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login (username: String, password: String): Observable<boolean> {
    return this.http.post('',
                           JSON.stringify({username: username, password: password}))
      .map((response: Response) => {

        // If there's a jwt token in response, login successful
        let token = response.json() && response.json().token;
        if (token) {
          this.token = token;   // Set token property
          localStorage.setItem('currentUser',
            JSON.stringify({username: username, token: token}));
          return true;          // Successful login
        }
        else {
          return false;       // Failed login
        }
      });
  }

  logout(): void {

    // Clearn token, remove user from local storage
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
