/*
Get all users from API
 */

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from './authentification.service';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(
    private http: Http,
    private authenticationService: AuthenticationService) {}

    createUser(user: User) {
      return this.http.post('users/signup', user);
    }

}
