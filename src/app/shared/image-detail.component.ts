/* 
   Details of selected image
*/

import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component ({
	selector: 'image-detail',
	templateUrl: './image-detail.component.html',
	styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent {
	constructor (private imageService: ImageService) {}
}