/*
   Filters images according to category
*/

import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'imageFilter' })

export class ImageFilterPipe implements PipeTransform {
	
	// Takes in image array and criteria from selected btn
	transform(items: any[], criteria: string): any {
		if (criteria === 'all') {
			return items;
		}
		else {
			
			// Another lambda. Filters images(items) by criteria
			return items.filter(item => {
				return item.category === criteria;
			})
		}
	}
}