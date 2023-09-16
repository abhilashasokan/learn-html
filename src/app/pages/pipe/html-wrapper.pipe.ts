import { Pipe, PipeTransform } from '@angular/core';
import { replace } from 'lodash';

@Pipe({
  name: 'HTMLWrapper'
})
export class HtmlWrapperPipe implements PipeTransform {

  transform(value: any, wrapper: string): any {
    return replace(wrapper, new RegExp('#META#', 'gi'), value);
  }
}
