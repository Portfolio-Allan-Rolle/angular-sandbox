import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    //console.log('value', value, 'args', args)
    if(!value) return null;
    if(!args) return value;
    return value.filter((el:any) => JSON.stringify(el).toLowerCase().includes(args))
  }

}
