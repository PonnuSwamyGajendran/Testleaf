// Callback function --> passing one function as an argument to the other function
function add(a,b, callback){
    console.log(a+b)
    callback(100,200)
}

function sum(c,d){
    console.log(c+d)
}

add(10,20,sum);