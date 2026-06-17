let myPromise = new Promise((resolve, reject) => {
    let success = true
    if(!success){
        resolve("Expression is successfull")
    } else {
        reject("Expression is not satified")
    }
})
myPromise
.then((result) => {console.log(result)})
.catch((error) => {console.log(error)})
