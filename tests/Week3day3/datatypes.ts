/*  Datatypes 
1. any --> it accepts any data types and also we can perform operations while using any datatype
2. unknown --> It throws compilation error while trying to do operation on unknown datatype. Here we need to confirm the type before performing any operation
3. never --> It used mostly in function. Function never finishes (It is similar to void in java --> In void func runs and finsihes but returns nothing)
4. tuple --> It is similar to array in Js, where each element can have different data types. Ideally it allows multiple datatypes
*/

//any 

let s1:any = 10
let s2:any = 20
let s3=s1+s2
console.log(s1+s2) // here we can perform operations using any data type


//unknown

let nameF:unknown = "Abdur" //console.log(data.toUpperCase()) // compile error. here we cannot perform opertaion 

if(typeof nameF==='string'){  // before performing opertaion we need to explicitly mention the type
    console.log(nameF.toUpperCase) 
}

//never --> Function never ends

// tuple --> element can have different datatype

let studentRecord:[string,number,boolean] = ["Arun", 29, true] // here it should follow string order. If order chnages it gives compilation error

//let studentRecord1:[string,number,boolean] = [29, "Arun", true] // wrong one -> not following order

// example:

function addition(r1:number, r2:number){
    console.log(r1+r2)
}
addition(50,20)


function multiply(p1:number, p2: number): number {
    console.log(p1*p2)
    return p1*p2
}
multiply(10,10)