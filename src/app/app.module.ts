import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageService } from './shared/image.service';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
	GalleryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
