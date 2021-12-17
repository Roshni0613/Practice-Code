var arr:number[]=[11,2,33,40,5];
console.log("Given array: \n"+arr);
var squares:number[]=arr.map(x=>x*x);
console.log(squares);

function test(x:number){
    return x>10;
}

console.log("First Element greater than 10:"+arr.find(test));

console.log("First Element position greater than 10:"+arr.findIndex(x=>x>10));

//Rest operator
function sum(...arrNum:number[]):number{
    let res=0;
    arrNum.forEach(x=>{
        res=res+x;
    })
    return res;
} 

console.log("Sum of 3 numbers: "+sum(10,20,50));

//filter operator

var arrEvenNum=arr.filter(x=>x%2==0);
console.log("Even Elements only: "+arrEvenNum);