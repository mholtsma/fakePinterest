/*
   Displays the gallery
*/

import 'rxjs/add/operator/switchMap';
import {Component, OnChanges, Input, OnInit, OnDestroy} from '@angular/core';
import { ImageService } from '../shared/image.service';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component ({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges, OnInit, OnDestroy {
  displayImages: any[] = [];		 // Image array holds any type
  private  sub: Subscription;
  @Input() filter?: string = 'all'; // Default displays all images

  constructor (private imageService: ImageService,
               private route: ActivatedRoute,
               private router: Router) {
    this.displayImages = this.imageService.getAllImages();
  }

  ngOnChanges() {
    this.displayImages = this.imageService.getAllImages();
  }
  // After component is intiallized we check the parameter to see if a search as executed
  ngOnInit() {
    // assign the subscription to a variable so we can unsubscribe to prevent memory leaks
    this.sub = this.route.params.subscribe(params => {
      // search is the name of the paramerter in the URL
      if (params['search']) {
        this.filter = params['search'];
      }
      console.log(this.filter);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
