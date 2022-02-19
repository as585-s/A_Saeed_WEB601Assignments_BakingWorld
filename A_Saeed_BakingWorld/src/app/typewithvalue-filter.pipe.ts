import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'typewithvalueFilter'
})
export class TypewithvalueFilterPipe implements PipeTransform {

  transform(contentList: Content[], filterByThisType?: string): Content[] {
    console.log("filter value: ", filterByThisType);
   // return contentList.filter(f => f.type == filterByThisType);

   return contentList.filter(c=>{
     if(filterByThisType){
       return c.type == filterByThisType;
     } else {
       return !c.type; //keep items where type is not set as well.
     }
   });

}
}
