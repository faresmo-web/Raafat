import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spuare'
})
export class SpuarePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
