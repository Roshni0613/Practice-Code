import { Component } from '@angular/core';

@Component({
  selector: 'app-grade-demo',
  templateUrl: './grade-demo.component.html',
  styleUrls: ['./grade-demo.component.css']
})
export class GradeDemoComponent {

  public empData:any[] = [
    {"empno":6589,"ename":"SRIRAM","performance":1},
    {"empno":6369,"ename":"SMITH","performance":3},
    {"empno":6499,"ename":"ALLEN","performance":2},
    {"empno":6521,"ename":"WARD","performance":1},
    {"empno":6566,"ename":"JONES","performance":3},
    {"empno":7654,"ename":"MARTIN","performance":4},
    {"empno":7698,"ename":"BLAKE","performance":2},
    {"empno":7782,"ename":"CLARK","performance":4},
    {"empno":7839,"ename":"KING","performance":3}
    ];

}
