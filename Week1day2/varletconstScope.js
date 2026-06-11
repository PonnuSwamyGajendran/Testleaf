/* Assignments */

// Using var
const browserVersion = "Chrome"
function getBrowserVersion(){
    if(browserVersion == "Chrome"){
        var browserVersion = "90.2.56"
        console.log("Opened", browserVersion + " browser")
    }else{
        console.log("Not opened", browserVersion + " browser")
    }
    console.log(browserVersion)
}
getBrowserVersion();

// Using let
const browserVersion1 = "Chrome"
function getBrowserVersion1(){
    if(browserVersion1 == "Chrome"){
        let browserVersion1 = "94.56.8.67"
        console.log("Opened", browserVersion1 + " browser")
    }else{
        console.log("Not opened", browserVersion1 + " browser")
    }
    console.log(browserVersion1)
}
getBrowserVersion1();

/* 
let and const --> Block scope variable
var --> function scope variable
*/

/* Practice 1
Behaviour of var - In var redeclaration and reinitialization is allowed */

var person // initialization
person = "Swamy" // assigning value
var person = "Ponnu" // declaration
person = "sanjay" // reassigning
var person = "vijay" // re-declaration
console.log(person)

console.log("---------------------")

/* Practice 2 
Behaviour of let - In let reassignment is allowed but re-declaration is not allowed */

let person1 // initialization
person1 = "Swamy" // assigning value
//let person1 = "Ponnu" // declaration
person1 = "sanjay" // reassigning
//let person = "vijay" // re-declaration
console.log(person1)

console.log("---------------------")

/* Practice 3 
Behaviour of const - In const both reassignment and redeclaration is not allowed */
const person2 = "SGP"
//person2 = "GSP" - reassigning value is not allowed  
const person3 = "code"
//const person3 = "script" - redeclaration is not allowed
console.log(person3)


/* Practice 4
Scope of var, let and const */

var browser = "Edge"
if(browser === "Edge"){
    console.log("opened", browser)
} else {
    console.log("not opened", browser)
}


let browser1 = "Chrome"
if(browser1 === "Edge"){
    let browser1 = "Edge"
    console.log("opened", browser1)
} else {
    console.log("not opened", browser1)
}


const browser2 = "Edge"
if(browser2 === "Edge"){
    //const browser2 = "Edge"
    console.log("opened", browser2)
} else {
    console.log("not opened", browser2)
}

/* Practice 5 Reference*/ 
console.log ("**** Reference ****")
const browserVersion3 = "Chrome"
function getbrowserVersion ()
{
    if(browserVersion3 == "Chrome")
        {
        var browserVersion = "975979"; 
        console.log(browserVersion);
        }   
}
getbrowserVersion();

function getbrowserVersion2 ()
{
    if(browserVersion == "Chrome")
        {
        let browserVersion = "975979"; 
        console.log(browserVersion);
        }   
}
getbrowserVersion2();




for (let i=0; i<=25; i++){
    if (i%2!=0){
        console.log(i);
    }
}