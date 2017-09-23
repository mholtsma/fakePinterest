import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ImageFilterPipe } from './shared/filter.pipe';
import { ImageService } from './shared/image.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navigationBar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './images/image-detail.component';
import { appRoutes } from '../routes';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { routing } from '../routes';

import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from '../services/authentification.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    ImageFilterPipe,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    routing
  //  RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ImageService,
    ImageFilterPipe,
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
