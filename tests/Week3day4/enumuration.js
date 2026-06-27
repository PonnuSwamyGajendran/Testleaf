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
var browser;
(function (browser) {
    browser[browser["open"] = 0] = "open";
    browser[browser["context"] = 1] = "context";
    browser[browser["newtab"] = 2] = "newtab";
    browser[browser["incognito"] = 3] = "incognito";
    browser[browser["close"] = 4] = "close"; // 4
})(browser || (browser = {}));
console.log(browser.incognito); // prints index value 3
console.log(browser);
// We can assign value also, if any value assigned as below then it starts with next number to the value
var browser1;
(function (browser1) {
    browser1[browser1["open"] = 0] = "open";
    browser1[browser1["context"] = 20] = "context";
    browser1[browser1["newtab"] = 21] = "newtab";
    browser1[browser1["incognito"] = 22] = "incognito";
    browser1[browser1["close"] = 23] = "close"; //23
})(browser1 || (browser1 = {}));
console.log(browser1.incognito);
console.log(browser1);
// 2. String enum
var openBrowser;
(function (openBrowser) {
    openBrowser["browser1"] = "Chrome";
    openBrowser["browser2"] = "Edge";
    openBrowser["browser3"] = "Firefox";
})(openBrowser || (openBrowser = {}));
console.log(openBrowser.browser3);
console.log(openBrowser);
// 3. Heterogeneous enum
var hetere;
(function (hetere) {
    hetere[hetere["open"] = 0] = "open";
    hetere[hetere["context"] = 1] = "context";
    hetere["newtab"] = "testtab";
    hetere[hetere["incognito"] = 10] = "incognito";
    hetere[hetere["closetab"] = 11] = "closetab";
    hetere[hetere["closeBrowser"] = 12] = "closeBrowser"; //12
})(hetere || (hetere = {}));
console.log(hetere.newtab);
console.log(hetere);
