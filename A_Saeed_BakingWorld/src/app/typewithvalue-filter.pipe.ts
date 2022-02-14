import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'typewithvalueFilter'
})
export class TypewithvalueFilterPipe implements PipeTransform {

  transform(contentList: Content[]) {
    return contentList.filter(f =>
      f.type == 'Meat' ? f.type.length !== 0 : false
      );
  }

}
