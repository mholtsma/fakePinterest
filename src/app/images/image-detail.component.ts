/*
   Details of selected image
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../shared/image.service';

@Component ({
selector: 'app-image-detail',
templateUrl: './image-detail.component.html',
styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent implements OnInit {
  image: any;

  constructor(private imageService: ImageService, private route: ActivatedRoute) {}

// Run for the first time it does the thing
  ngOnInit() {
    this.image = this.imageService.getImageByID(
      // + converts id to num
      // Provides initial value of route params
      +this.route.snapshot.params['id']
    );
  }
}
