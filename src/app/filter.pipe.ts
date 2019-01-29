import { Pipe, PipeTransform } from '@angular/core';
import { Apt } from './apt';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(apts: Apt[], searchText: string): any[] {

    if (!apts) {
      return [];
    }
    if (!searchText) {
      return apts;
    }
    searchText = searchText.toLocaleLowerCase();

    return apts.filter(apt => {
      return apt.city.toLocaleLowerCase().includes(searchText);
    });
  }
}