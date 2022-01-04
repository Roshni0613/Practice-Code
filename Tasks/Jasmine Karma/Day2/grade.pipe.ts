import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(grade: number): string {
    let result="";
    switch(grade){
      case 1:
        result="Outstanding";
        break;
      case 2:
        result="Excellent";
        break;
      case 3:
        result="Good";
        break;
      case 4:
        result="Average";
        break;
      default:
        result="";

    }
    return result;
  }

}
