class Customer{
    custID:number;
    custName:string;
    city:string;

    constructor(custID:number=0,custName:string="",city:string=""){
        this.custID=custID;
        this.custName=custName;
        this.city=city;
    }

    showDetails():void{
        console.log(`Customer Details:: ID:${this.custID}, Name: ${this.custName}, City: ${this.city}`);
       }
}

let c1:Customer=new Customer();
let c2:Customer = new Customer(111);
let c3:Customer = new Customer(222, "Roshni");
let c4:Customer = new Customer(333, "Mahi", "Pune"); 

c4.showDetails();