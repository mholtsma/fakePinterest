/*
   Displays the gallery
*/

import { Component, OnChanges, Input } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component ({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {

	displayImages: any[] = [];		 // Image array holds any type
	@Input() filter?: string = 'all' // Default displays all images
	
	constructor (private imageService: ImageService) {
		this.displayImages = this.imageService.getAllImages();
	}
	
	ngOnChanges() {
		this.displayImages = this.imageService.getAllImages();
	}
}
