import { RouterModule, Routes} from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/images/image-detail.component';
import { LoginComponent } from './app/login/login.component';
import { SignupComponent } from './app/signup/signup.component';
import { AuthGuard } from './app/guards/index';

export const appRoutes: Routes = [

  // Secure gallery route by passing AuthGuard to canActivate property
  { path: 'gallery', component: GalleryComponent, /*canActivate: [AuthGuard]*/ },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
