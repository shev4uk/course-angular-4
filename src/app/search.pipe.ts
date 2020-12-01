import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: User[], args: string): unknown {
    console.log(value, args);
    if (args) {
      return value.filter((item) => item.name.toLowerCase().includes(args.toLowerCase()));
    }
    return value;
  }

}
