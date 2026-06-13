/* Operators */
/* 
1. Arithmetic Operators

| Operator | Description         |
| -------- | ------------------- |
| `+`      | Addition            |
| `-`      | Subtraction         |
| `*`      | Multiplication      |
| `/`      | Division            |
| `%`      | Modulus (remainder) |
| `**`     | Exponentiation      |

2. Comparison Operators

| Operator | Description             |
| -------- | ----------------------- |
| `==`     | Equal value             |
| `===`    | Equal value and type    |
| `!=`     | Not equal               |
| `!==`    | Not equal value or type |
| `>`      | Greater than            |
| `<`      | Less than               |
| `>=`     | Greater than or equal   |
| `<=`     | Less than or equal      |

3. Logical Operators

| Operator | Description |
| -------- | ----------- |
| `&&`     | AND         |
| `\|\|`   | OR          |
| `!`      | NOT         |

4. Assignment Operators

| Operator | Example  |
| -------- | -------- |
| `=`      | `x = 10` |
| `+=`     | `x += 5` |
| `-=`     | `x -= 5` |
| `*=`     | `x *= 5` |
| `/=`     | `x /= 5` |

5. Increment and Decrement

| Operator | Description    |
| -------- | -------------- |
| `++`     | Increment by 1 |
| `--`     | Decrement by 1 |

6. Ternary Operator (short form of if else)
condition ? value1 : value2
*/


// 1. Arithmetic Opeartors

let a=20
let b=4

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a**b)
console.log(a%b)

// Comaparison operator

console.log(a==b)
console.log(a===b)
console.log(a>b)
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a!=b)
console.log(a!==b)

// Logical operators

if(a && b){
    console.log("Both are not same value")
}else{
    console.log("Both are same value")
}

if ((a/b) && (a%b)){
    console.log("Both are not same")
}else{
    console.log("Both are same")
}

if(a || b){
    console.log("Corret statement")
}else{
    console.log("In-correct statement")
}

if((a*b) || (a**b)){
    console.log("Correct statemnet")
}else{
    console.log("In-correct statement")
}

let age=21
let hasLicense=true
console.log(age>=18 && hasLicense)
console.log(age<18 || hasLicense)
console.log(!hasLicense)


// Assignment operator
let num = 24

console.log(num +=10)
console.log(num -=10)
console.log(num *=10)
console.log(num /=10)
console.log(num %=10)


// increment and decrement

let p=10
let i=10

console.log(p) //10
console.log(p++) //10
console.log(p) //11
console.log(p--) //11
console.log(p) //10

console.log(--p)//9
console.log(p) //9
console.log(--p)//8

for (i=10; i>=0; i--){
    console.log(i)
}

for (i=10; i<=0; i++){
    console.log(i)
}

for (i=10; i>=0; --i){
    console.log(i)
}

// for(i=0; i>=0; ++i){
//     console.log(i)
// }

// Ternary Operator

let age1 = 20;

let result = age1 >= 18 ? "Adult" : "Minor";

console.log(result);

let mark = 51;

let result1 = mark>=65 ? "Pass" : "Fail"
console.log(result1)