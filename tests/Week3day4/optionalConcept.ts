// Optional concept

function login(username:string, password?:string) {
    if(password){
        console.log("This login page includes password field", password)
    } else {
        console.log(`This login page have only ${username} field`)
    }
}
login("ponsam") // password is optional 
login("ponsam", "welcome@123#")


function login1(username:string, password?:string) {
    if(username || password){
        console.log("This login page includes password field", password)
    } else {
        console.log(`This login page have only ${username} field`)
    }
}
login1("ponsam") // password is optional 
login1("ponsam", "welcome@123#")

function login2(username:string, password?:string) {
    if(username && password){
        console.log("This login page includes password field", password)
    } else {
        console.log(`This login page have only ${username} field`)
    }
}
login2("ponsam") // password is optional 
login2("ponsam", "welcome@123#")