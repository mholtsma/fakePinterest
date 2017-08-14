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
  return IMAGES.slice(0).find(image => image.id === id);
}

}

// Replace this with call to db eventually
const IMAGES = [
  {'id': 1, 'title': 'Angry Whale Harold', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_angry.jpg'},
  {'id': 2, 'title': 'Asleep Whale Helena', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_asleep.jpg'},
  {'id': 3, 'title': 'Embarrassed Whale Holly', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_blush.jpg'},
  {'id': 4, 'title': 'Bunny Whale Barb', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_bunny.jpg'},
  {'id': 5, 'title': 'Cool Whale Marc', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_cool.jpg'},
  {'id': 6, 'title': 'Crying Whale Peach', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_cry_0.jpg'},
  {'id': 7, 'title': 'Crying Whale Petunia', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_cry_1.jpg'},
  {'id': 8, 'title': 'Crying Whale Carol', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_cry_2.jpg'},
  {'id': 9, 'title': 'Disguised Whale Bob', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_disguise.jpg'},
  {'id': 10, 'title': 'Energized Whale Alan', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_energized.jpg'},
  {'id': 11, 'title': 'Flirty Whale Tina', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_flirt.jpg'},
  {'id': 12, 'title': 'Greedy Whale Ebby', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_greed.jpg'},
  {'id': 13, 'title': 'Kissy Whale Vernon', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_kiss_0.jpg'},
  {'id': 14, 'title': 'Kissy Whale Minny', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_kiss_1.jpg'},
  {'id': 15, 'title': 'Love Whale Lucy', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_love_0.jpg'},
  {'id': 16, 'title': 'Love Whale Becca', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_love_1.jpg'},
  {'id': 17, 'title': 'Mad Whale Gary', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_mad.jpg'},
  {'id': 18, 'title': 'Outraged Whale Stan', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_outrage.jpg'},
  {'id': 19, 'title': 'Pokerface Whale Susan', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_pokerface.jpg'},
  {'id': 20, 'title': 'Pouty Whale Ira', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_pout.jpg'},
  {'id': 21, 'title': 'Rage Whale Sara', 'category': 'Whalemoji', 'url': 'assets/img/whalemoji_rage.jpg'},
  {'id': 22, 'title': 'T-Pose Back', 'category': 'Blender', 'url': 'assets/img/figure-back.png'},
  {'id': 23, 'title': 'T-Pose Front', 'category': 'Blender', 'url': 'assets/img/figure-front.png'},
  {'id': 24, 'title': 'T-Pose Side L', 'category': 'Blender', 'url': 'assets/img/figure-sideL.png'},
  {'id': 25, 'title': 'T-Pose Side R', 'category': 'Blender', 'url': 'assets/img/figure-sideR.png'},
  {'id': 26, 'title': 'CMPM26 Final Snapshot', 'category': 'Blender', 'url': 'assets/img/LP-0250.png'},
];
