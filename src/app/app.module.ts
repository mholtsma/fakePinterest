import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ImageFilterPipe } from './shared/filter.pipe'
import { ImageService } from './shared/image.service';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import {ImageDetailComponent} from './images/image-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ImageDetailComponent,
	ImageFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
