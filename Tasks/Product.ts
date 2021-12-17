class Product{
    private productId:number;
    private productName:string;
    private unitPrice:number;
    private qty:number;

    constructor(productId:number){
        this.productId=productId;
    }

    public get ProductId():number{
        return this.productId;
    }

    public get ProductName():string{
        return this.productName;
    }

    public get UnitPrice():number{
        return this.unitPrice;
    }

    public get Quantity():number{
        return this.qty;
    }

    public set ProductName(name:string){
        this.productName=name;
    }

    public set UnitPrice(unitPrice:number){
        this.unitPrice=unitPrice;
    }
    public set Quantity(qty:number){
        this.qty=qty;
    }
}

let p1:Product=new Product(123);
p1.ProductName="Samsung Phone";
p1.UnitPrice=15000;
p1.Quantity=2;

console.log(`Product Details:: ID:${p1.ProductId}, Product Name: ${p1.ProductName}, Unit Price: ${p1.UnitPrice}, Quantity: ${p1.Quantity}`);