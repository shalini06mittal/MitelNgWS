import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expo'
})
export class ExpoPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    console.log('value',value)
    console.log('args',args)
    return value**args[0];
  }
}
