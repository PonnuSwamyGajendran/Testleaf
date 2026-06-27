/*
Typescript: It is a type safety. Because of this type safety property we will use this typescript over javascript to avoid type related error

Typescript is a statically typed language
Javascript is a dynamically typed language

Typescript execution is slow compare to javascript because ts file should be compiled to js and they it starts execution.

Way to execute typescript files:

1. Compile ts into js and then execute
Command:   
    tsc filename.ts //typescript file --> it create js file upon compilation
    node filename.js // js file

2. Directly execute ts using typeScript executor
Command: 
    tsx filename.ts // tsx -> ts executor -> to attain this we need to install typescript executor using -> npm install -D tsx
 */


/*TypeScript Inferences
1. Implicit Inferences
2. Explicit Inferences

1. Implicit Inferences: Typescript interpretends datatypes by its own

Example: let empName="Ponsam" // it automatically interpretends the value as string by its own

2. Explicit Inferences: Here we need to explicitility gives/provided datatype

Example: let empCode:number = 252252
*/


/* Datatypes

Typescript has few more datatypes along with js datatypes

1. any
2. unknown
3. never
4. tuple
5. js datatypes (number, string, boolean, null, undefined)
*/

1. any --> it accepts any data types and also we can perform operations while using any datatype
2. unknown --> It throws compilation error while trying to do operation on unknown datatype. Here we need to confirm the type before performing any operation
3. never --> It used mostly in function. Function never finishes (It is similar to void in java --> In void func runs and finsihes but returns nothing)
4. tuple --> It is similar to array in Js, where each element can have different data types. Ideally it allows multiple datatypes
