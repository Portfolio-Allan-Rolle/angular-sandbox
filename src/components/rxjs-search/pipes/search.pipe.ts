import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(brands: string[], searchTerm: string): string[] {
    if (!brands) {
      throw new Error('An array must be provided !');
    }
    return brands.filter((brand: string) =>
      JSON.stringify(brand).toLowerCase().includes(searchTerm.trim())
    );
  }
}
