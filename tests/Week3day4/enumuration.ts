/* Enumuration (enum) --> It is used to declare a named constants
Example: Hotel restaruart menu. we cannot order items outside the menu

1. Number enum
2. String enum
3. Heterogenuous enum

Syntax: 
    enum variableName {
    -------
    -------
    -------
    }

*/


//1.  Number enum

enum browser { // In enum it always starts with index by default
    open,  // 0
    context, //1
    newtab, // 2
    incognito, //3
    close // 4
}

console.log(browser.incognito) // prints index value 3
console.log(browser)

// We can assign value also, if any value assigned as below then it starts with next number to the value

enum browser1 {
    open, //0
    context=20, //20
    newtab, //21
    incognito, //22
    close //23
}

console.log(browser1.incognito)
console.log(browser1)

// 2. String enum

enum openBrowser {
    browser1 = "Chrome",
    browser2 = "Edge",
    browser3 = "Firefox",
}

console.log(openBrowser.browser3)
console.log(openBrowser)

// 3. Heterogeneous enum

enum hetere {  // If we add any type then we need to explicity mention that the next data as number to continue it with index values
    open,  //0
    context, //1
    newtab="testtab", // string
    incognito=10, // --> we should explicitly tell that its a number then it starts countinuing its index value
    closetab, //11
    closeBrowser //12
}

console.log(hetere.newtab)
console.log(hetere)

/*  If 1st variable is number, then automatically 2nd is a number. If we use 2nd as string then from 3rd onwards we to 
specifically mention some number to continue with number index */