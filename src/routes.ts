import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/images/image-detail.component';
import { LoginComponent } from "./app/login/login.component";

export const appRoutes: Routes = [
  { path: 'gallery', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent },
  { path: '', redirectTo: '/gallery', pathMatch: 'full'},
  { path: 'login', component: LoginComponent }
];
