const multiply = (a: number, b: number): number => a * b;
const result = multiply(5, 2);
console.log(`5*2=: ${result}`);


const myNumber: number = 42; 
let myString: string = "Печенька";
const myBoolean: boolean = false;


console.log(myNumber, myString, myBoolean);



interface Entity { 
    id: number; 
 } 
  
 interface ToJsonStringify extends 
 Entity { 
    e1?: number; 
    e2?: string; 
 } 
  
 const data: ToJsonStringify = { 
    id: 4, 
    e1: null, 
    e2: null, 
 }

 const json_format: string = JSON.stringify(data);
console.log(json_format);