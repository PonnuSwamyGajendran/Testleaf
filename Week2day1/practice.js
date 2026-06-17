// Array and Functions

// Arrays
let numarr = [1,2,3,4,5]
console.log(numarr)

let heteroarray=[true, "welcome", 354, null, [5,8]]
console.log(heteroarray)

heteroarray[2]="replaced"
console.log(heteroarray)

/*
push() --> it used to add one or more elements to the end of an array
pop() --> it will remove only one element from the end of an array. ideally it will print last element 
shift() --> it will remove the only one element from the start of an array
unshift() --> it will add one or more element to the beginning of an array
slice() --> it will slice/extract the portion of an array. It will not modify the array
splice() --> it is used to remove and add element into an array. It will modify the array
includes() --> it checks whether the element or value is available or not
*/

heteroarray.push("Testleaf", "Qeagle")
console.log(heteroarray)

console.log(heteroarray.pop())
console.log(heteroarray)

console.log(heteroarray.shift())
console.log(heteroarray)

heteroarray.unshift("abc", "xyz", 45, null)
console.log(heteroarray)

console.log(heteroarray.slice())   // slice will not modify the array
console.log(heteroarray)

console.log(heteroarray.slice(1,4))
console.log(heteroarray)

console.log(heteroarray.slice(-2))
console.log(heteroarray)

console.log(heteroarray.slice(-5,-2))
console.log(heteroarray)

console.log(heteroarray.slice(0))
console.log(heteroarray)

heteroarray.splice(2,4)    // splice will modify the array
console.log(heteroarray)

/*Functions
1. Traditional functions
2. Function Expressions
3. Arrow functions
4. call back function */

// 1. Traditional function

function add(){
    let a=10;
    let b=20;
    console.log(a+b)
}
add()

// using params

function sum(x,y){  // parameters
    console.log(x+y)
}
sum(100,200) // arguments

function diff(p,q){
    //console.log(q-p)
    return q-p          // returns the value to function. 
}
diff(50,100) // calling function won't display the result in console. because it return the value to function. To display the value we need to call the entore function to console as below in next example

function diff1(w,e){
    //console.log(q-p)
    return w-e          // returns the value to function. 
}
console.log(diff1(50,100)) 


// 2. Function expression --> store a function into a variable and call the function using that variable
let newfunexp = function funexp(h,k){
    console.log(h*k)
}
 newfunexp(2,3)


// 3. Arrow function
let arrowfun=(u,k)=>{
    console.log(u+k)     // write code inside bracket if we have multiple lines of code else write it in single line as belwo example
} 
arrowfun(5,6)

let add1=(o,n)=>o+n
console.log(add1(15,10))

let division = (f,c) => f/c
console.log(division(6,2)) 

let random = (l,m) => {
    return l+m
}
console.log(random(2,2))


// 4. Call back function --> providing output of one function to an input to the other function

function adult(d,g,senior){
    console.log(d+g)
    senior(z);
}
adult(4,5,senior(70))

function senior(z) {
    console.log("Senior citizen age\t" + z )
}

senior(66)