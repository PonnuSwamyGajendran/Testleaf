/*String can be represented in 3 ways
"double quote"
'Single quote'
`back tick` */

let org = "TestleafAcademy"
let org1 = 'TestleafAcademy1'
let org2 = `TestleafAcademy2`

console.log(org, org1, org2)
console.log("firstOrg", org)
console.log('secondorg', org1)
console.log(`The Academy ${org2} is my third organisation `)

let neworg = org.split()  // This will not split anything 
console.log(neworg) // output shows inside an array because splt is an array concept

let neworg1 = org.split("") // This will split each char sepeartely inside an array
console.log(neworg1)

let neworg2 = org.split(" ") // This will not split anything 
console.log(neworg2)

let neworg3 = org.split('A') // This will split into two array element with reference to A. Also it omits A
console.log(neworg3)

let splitreverse = org.split("").reverse().join() // This will reverse the string with comma seperated
console.log(splitreverse)

let reverseString = org.split("").reverse().join("") // This will reverse the string without comma seperated
console.log(reverseString)

let reverseString1 = org.split("").reverse().join(" ") // This will reverse the string without comma seperated but with space between each char
console.log(reverseString1)

let splitnew = org.split("l,f") // this is not poosible as it returns same value without split
console.log(splitnew)