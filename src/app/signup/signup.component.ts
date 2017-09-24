import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component ({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  model: any = {};
  loading = false;

  constructor (
    private router: Router,
    private userService: UserService,
  ) {}

  signup() {
    this.loading = true;
    this.userService.createUser(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        }
      );
  }
}
