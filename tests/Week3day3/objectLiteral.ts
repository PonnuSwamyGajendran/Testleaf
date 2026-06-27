/* Object Literal
1. Implicit way of creating object
2. Explicit way of creating object
 */

// Implicit way of creating object

let studentProfile = {
    name: "Rahul",
    Id: 250250,
    class: 7,
    grade: "B",
    subjects: 6,
    pass: 6,
    fail: 0,
    result: "pass"
}

console.log(studentProfile.result)
console.log(studentProfile)

// Explicit way of creating object

let studentProfile1: {
    name: string,
    Id: number,
    class: number,
    grade: string,
    subjects: number,
    pass: number,
    fail: number,
    result: string
} = {
    name: "Manoj",
    Id: 5656,
    class: 7,
    grade: "A",
    subjects: 6,
    pass: 5,
    fail: 1,
    result: "Distinction"
}

console.log(studentProfile1.name)
console.log(studentProfile1)