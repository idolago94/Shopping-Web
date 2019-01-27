import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'milk'
})
export class MilkPipe implements PipeTransform {

  constructor( private sanitizer:DomSanitizer ){}

  transform(value: string, args: string): any {
    if(args && value.indexOf(args)!=-1 ) {
      let index = value.indexOf(args);
      let newValue  = value.slice(0,index) + `<mark style='background-color:yellow'>` + value.slice(index, index+args.length) + "</mark>" + value.slice(index+args.length, value.length);
      return this.sanitizer.bypassSecurityTrustHtml(newValue);
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }

}
