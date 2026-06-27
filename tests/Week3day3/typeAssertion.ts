/*Type Assertions
1. Using angular bracket
2. Using as string
*/
let apiResponse:any = "Success"
let apiResponse1 = 201

let responseStatus = <string> apiResponse   // using angular bracket
let responseStatus1 = apiResponse as string // using as string

console.log(typeof responseStatus)
console.log(typeof responseStatus1)

console.log(responseStatus)
console.log(responseStatus1)