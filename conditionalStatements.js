function launchBrowser(browser){
    if(browser=="chrome"){
        console.log("Launched", browser + " browser")
    }else {
        console.log("Not launched", browser + " browser")
    }
}
launchBrowser("chrome");

 
function runTests(testType){
    switch (testType) {
        case "smoke":
            console.log("Smoke test executed")
            break;
        
        case "sanity":
            console.log("Sanity test executed")
            break;

        case "regression":
            console.log("Regression test executed")
            break
    
        default:
            console.log("Smoke test executed")
            break;
    }
}
runTests("regression");