/* This file explain or maintains all the concepts of Selectors
1. CSS Selectors (Cascading style sheet)
2. Xpath
| ---> Absolute xpath
| ---> Relative xpath


 */

/* Concepts of CSS selectors
a. Select by Id
b Select by Class
c. Select by Attribute
d. Decendant combinator
e. #####

a. Select by Id:

    Syntax: #idValue
    Example: #username [Id='username']

b. Select by class:

    Syntax: .classValue
    Example: .username [Class='username']

c. Select by Attribute

    Syntax: tagName[@attribute = 'attributeValue'] or [@attribute = 'attributeValue']
    Example: input[@id='username']

d. Decendant combinator

    Example: body div
    Selects all descendant inputs (child, grandchild, etc.).

e. ####

    Example: body>div
    Selects direct child input.


*** Notes ***
Attribute Priority:
p1 --> aria - label
p2 --> Id
p3 --> Name
p4 --> Class


If we have multiple locators with the same value then,
nth(0) or first() --> for 1st match
nth(1)  ---> for 2nd match
nth(n) or last() --> for last match

Additional Information on CSS locators: (parent and child)

1. meta(parent) + link(child) =>  + --> It will show immediate sibiling
2. meta ~ link  => ~ --> It will show all the sibilings
 */


/* Xpath has 2 major types
1. Basic Xpath
2. Advanced Xpath

Basic Xpath - Every xpath has:
1. Absolute Xpath
2. Relative Xpath


1. Absolute Xpath --> It starts with single / and it is a tedious way to find the element. It is not recommended
Example: /html/body/div[2]/div[2]/form/p[1]/input

2. Realtive Xpath --> It has 5 different types
2a. Attribute based xpath
2b. Text based xpath
2c. Partial attribute text based path
2d. Partial text based xpath
2e. Collection based xpath

------------------------------------------------------
Syntax:

2a. Attribute based xpath

//tagName[@attribute = 'attributeValue']
2b. Text based xpath

//tagName[text()='text in the DOM']

2c. Partial attribute text based xpath

//tagName[@contains(attribute,'partial attribute value')]

2d. Partial text based xpath

//tagName[@contains(text(),'partial text')]

2e. Collection based xpath

(//tagName[@attribute = 'attributeValue'])[index value]
 */

----- Advanced Xpath - yet to add -----