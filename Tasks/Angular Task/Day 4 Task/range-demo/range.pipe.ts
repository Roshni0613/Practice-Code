import { outputAst } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(inputData:any[],field:string,min:number,max:number): any[] {
    let result:any[]=[];
    if(field!="")
      result=inputData.filter(x=>{
        console.log(x[field]>=min && x[field]<=max +" "  +x[field]);
        return x[field]>=min && x[field]<=max;});
    else
      result=inputData;
    return result;
  }

}
