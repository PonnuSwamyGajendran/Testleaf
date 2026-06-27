/* Type alias --> alias means pet name
--> It is like a custom variable where I can explicitly mention what all types that the variable holds

1. Union type alias --> It is like a custom variable where I can explicitly mention what all types that the variable holds
2. Intersection alias --> It combines multiple types into one, meaning that the value must satisfy all the types together
 */
//loginCredential --> Alias name
// string | number | boolean --> custom types
var loginPage;
loginPage = "ponsam@gmail.com";
loginPage = 6767676767;
loginPage = "password@123#";
loginPage = true;
console.log(loginPage);
var newPage = {
    username: "Tester",
    password: "Welcome@123#",
    logo: "https//:logo.com",
    contact_Us: 12345678
};
console.log(newPage.logo);
console.log(newPage);
