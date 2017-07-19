/* 
   Methods to get images
*/

// Allow dependency injection into constructors of other components
import { Injectable } from '@angular/core'; 

@Injectable()

export class ImageService {
	
	displayImages = []; // Array that's going to be returned
	
	// Gets all the images from the set
	getAllImages() {
		return this.displayImages = IMAGES.slice(0); 
	}
	
	// Gets an image by its id
	getImageByID(id: number) {
		
		// Some lambda shit that just gets the id
		return IMAGES.slice(0).find(image => image.id == id);
	}
	
}

// Replace this with call to db eventually
const IMAGES = [
	{"id": 1, "title": "Angry Whale Harold", "url": "assets/whalemoji_JPEG/whalemoji_angry"},
	{"id": 2, "title": "Asleep Whale Helena", "url": "assets/whalemoji_JPEG/whalemoji_asleep"}
]