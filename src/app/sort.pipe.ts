import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: User[], ...args: unknown[]): unknown {
    console.log(value, args);
    function sortArray(a: User, b: User): number {
      if (args[0] === 'desc') {
        return b.age - a.age;
      } else {
        return a.age - b.age;
      }
    }
    return value.sort(sortArray);
  }

}
