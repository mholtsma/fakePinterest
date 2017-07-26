/*
   Filters images according to category
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'imageFilter' })
export class ImageFilterPipe implements PipeTransform {
  // Takes in image array and criteria from selected btn
  transform(items: any[], criteria: string): any {
    if (criteria === 'all') {
      return items;
    } else {
      // Another lambda. Filters images(items) by criteria
      return items.filter(item => {
        // check to see if we are searching for a category or a title
        // This seems like it would be slow for large amount of data
        // Would probably have to replace with a SQL query and just return the result
        if (item.category === criteria) {
          return item;
        }
        if (item.title.includes(criteria)) {
          return item;
        }
      });
    }
  }
}
