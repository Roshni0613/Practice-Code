import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-emp-sort-opt',
  templateUrl: './emp-sort-opt.component.html',
  styleUrls: ['./emp-sort-opt.component.css']
})
export class EmpSortOptComponent {

  @Output()
  sortBy:EventEmitter<string>=new EventEmitter();

  sortByEmpId_click(){
    this.sortBy.emit("id");
  }
  sortByName_click(){
    this.sortBy.emit("name");
      }
  sortByJob_click(){
    this.sortBy.emit("job");
    
  }
  sortBySal_click(){
    this.sortBy.emit("salary");
    
  }
  sortByDeptno_click(){
    this.sortBy.emit("deptNo");
    
  }
}
