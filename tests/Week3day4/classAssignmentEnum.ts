// Enum assignment

enum Environment {       //string enum
    LOCAL = "LOCAL",
    DEVELOPMENT = "DEVELOPMENT",
    STAGING = "STAGING",
    PRODUCTION = "PRODUCTION"
}

function runTests(environment:Environment) {
    if(environment === Environment.LOCAL) {
        console.log(`Test start's execution on ${environment} environment`)
    } else if (environment===Environment.DEVELOPMENT){
        console.log(`Test start's execution on ${environment} environment`)
    } else if (environment===Environment.STAGING) {
        console.log(`Test start's execution on environment`, environment)
    } else {
        console.log(`Test start's exeution on environment`, environment)
    }
}

runTests(Environment.STAGING)

function runTests1(environment: Environment):string {
    if(environment === Environment.LOCAL) {
        console.log(`Test start's execution on ${environment} environment`)
    } else if (environment===Environment.DEVELOPMENT){
        console.log(`Test start's execution on ${environment} environment`)
    } else if (environment===Environment.STAGING) {
        console.log(`Test start's execution on environment`, environment)
    } else {
        console.log(`Test start's exeution on environment`, environment)
    }
    return environment  // This way of return provide 2 o/p -> 1. if block output and then returing env to function 
}

console.log(runTests1(Environment.DEVELOPMENT))


function runTests2(environment: Environment):string {
    if(environment === Environment.LOCAL) {
        return `Test starts execution on ${environment} environment`;
    } else if (environment===Environment.DEVELOPMENT){
        return `Test starts execution on ${environment} environment`;
    } else if (environment===Environment.STAGING) {
        return `Test starts execution on ${environment} environment`;
    } else {
        return `Test starts execution on ${environment} environment`;
    }
}

console.log(runTests2(Environment.PRODUCTION))  // This way it gives only one output

// Above function without if-else

function runTests3(environment: Environment): string {
    return `Test starts execution on ${environment} environment`;
}
console.log(runTests3(Environment.LOCAL));
// console.log(runTests3(Environment.DEVELOPMENT));
// console.log(runTests3(Environment.STAGING));
// console.log(runTests3(Environment.PRODUCTION));