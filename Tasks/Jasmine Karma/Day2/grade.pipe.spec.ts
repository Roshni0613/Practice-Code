import { GradePipe } from './grade.pipe';

describe('GradePipe', () => {
  let pipe:GradePipe;

  beforeEach(()=>{
    pipe=new GradePipe();
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "Outstanding" when input is "1"', () => {
    const result=pipe.transform(1);
    expect(result).toBe("Outstanding");
  });

  it('should return "Excellent" when input is "2"', () => {
    const result=pipe.transform(2);
    expect(result).toBe("Excellent");
  });

  it('should return "Good" when input is "3" && "Average" when input is "4"', () => {
    let result=pipe.transform(3);
    expect(result).toBe("Good");
    result=pipe.transform(4);
    expect(result).toBe("Average");
  });

  it('should return empty string when input is any number greater than 4', () => {
    let result=pipe.transform(8);
    expect(result).toBe("");
    result=pipe.transform(4.1);
    expect(result).toBe("");
  });

  it('should return empty string when input is any number less than 1', () => {
    let result=pipe.transform(0.5);
    expect(result).toBe("");
    result=pipe.transform(-3);
    expect(result).toBe("");
  });



});
