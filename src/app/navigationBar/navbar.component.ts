import {Component} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component ({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  title = 'Home';
  query: string;
  constructor(
    private router: Router,
  ) {}
  // Call this function when the search button is clicked
  // basic route link with optional query
  // Add this to make an optional parameter: { search: this.query }
  // Should probably try to always make components talk to each other
  // But this is a good for routes
  search() {
    if (!this.router.navigate(['/gallery', { search: this.query }])){
      console.log('navigate error');
    }
  }
}
