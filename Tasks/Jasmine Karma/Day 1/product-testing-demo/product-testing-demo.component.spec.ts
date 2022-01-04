import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ProductTestingDemoComponent } from './product-testing-demo.component';

describe('ProductTestingDemoComponent', () => {
  let component: ProductTestingDemoComponent;
  let fixture: ComponentFixture<ProductTestingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTestingDemoComponent ],
      imports : [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTestingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


//result property default test case 
it('result should be 0 as default value', () => {
  const strOutput:number  = component.result;
  expect(strOutput).toBe(0);
});

// Total Amount <p> tag invisible by default
it('p tag should be invisibale by default', () => {

  const paraObj = fixture.nativeElement.querySelector('p');
  expect(paraObj).not.toBeTruthy;
});

//Check the default values of quantity --- should be 1
it('Quantity default value should be 1 ',()=>{
  expect(component.qty).toEqual(1);
})

//Check the price and quantity modifications reflects the component properties

it('quantity modifications should reflects the component properties', () => {
  const inputObj = fixture.nativeElement.querySelectorAll('input');
  inputObj[2].value=7;
  inputObj[2].dispatchEvent(new Event("input"));
  
  expect(component.qty).toBe(7);
});

it('price modifications should reflects the component properties', () => {
  const inputObj = fixture.nativeElement.querySelectorAll('input');
  inputObj[1].value=1000;
  inputObj[1].dispatchEvent(new Event("input"));
  expect(component.unitPrice).toBe(1000);
});



// Check the generate proper result for valid price and quantity.

it('price modifications should reflects the component properties', () => {
  const inputObj = fixture.nativeElement.querySelectorAll('input');
  inputObj[0].value="Printer";
  inputObj[0].dispatchEvent(new Event("input"));
  inputObj[1].value=1000;
  inputObj[1].dispatchEvent(new Event("input"));
  inputObj[2].value=7;
  inputObj[2].dispatchEvent(new Event("input"));
  const buttonObj = fixture.nativeElement.querySelectorAll('button');
  buttonObj[0].dispatchEvent(new Event("click"));
  fixture.detectChanges();
  
  const result=component.unitPrice*component.qty;

  const paraObj = fixture.nativeElement.querySelector('p');

  
  expect(paraObj.textContent).toBe("Total Amount : "+result);
});


//Check the result message by calling "getTotalAmount()"  method
it('result should be product of unit price and quantity after calling getTotalAmount', () => {

  component.unitPrice = 1000;
  component.qty = 2;
  component.getTotalAmount();
  const strResult=component.unitPrice*component.qty;
 expect(component.result).toBe(strResult);
});





});
