import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
export class RoundPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    console.log(value, args);
    if (args.length > 0) {
      return value.toFixed(args[0]);
    } else {
      return Math.round(value);
    }
  }

}
