import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milk'
})
export class MilkPipe implements PipeTransform {

  transform(value: string, args: string): any {
    if(args && value.indexOf(args)!=-1 ) {
      let index = value.indexOf(args);
      let newValue  = value.slice(0,index) + `<mark>` + value.slice(index, index+args.length) + "</mark>" + value.slice(index+args.length, value.length);
      return newValue;
    }
    return value;
  }

}
