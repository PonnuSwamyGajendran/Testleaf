/* This file explain or maintains all the concepts of Selectors
1. CSS Selectors (Cascading style sheet)
2. Xpath
| ---> Absolute xpath
| ---> Relative xpath

 */

/* Concepts of CSS selectors
a. Select by Id
b. Select by Class
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

----- Advanced Xpath -----

1. Parent to Child
2. Grand parent to grand child
3. Child to parent
4. Grand child to grand parent
5. Elder sibilings to younger sibilings
6. Younger sibilings to Elder sibilings
7. Elder cousin to younger cousin
8. Young cousin to Elder cousin

Syntax and Example:

1. Parent to child

Syntax:
    Relative xpath of parent/tagName of child

    //form[@id='login']/p

2. Grand parent to grand child

Syntax:
    Relative xpath of grand parent//tagName of grand child

3. Child to parent

Syntax: 
    Relative xpath of child/parent:: tagName of parent  --> :: -> Scope operator

    //input[@id='username']/parent::p

4. Grand child to grand parent:

Syntax:
    Relative xpath of grand child/ancestor:: tagName of grand parent

    //input[@id='password']/ancestor::form

Axes locators:

5. Elder sibiling to younger sibiling

Syntax: 
    (Relative xpath of elder sibiling)/following-sibiling::tagName of younger sibiling

    //label[text()='username']/following-sibiling::input

6. Young sibiling to Elder sibiling

Syntax:
    (Relative xpath of younger sibiling)/preceeding-sibiling::tagName of elder sibiling

    //input[@id='username']/preceeding-sibling::label

7. Elder cousin to Younger cousin

Syntax: 
    (Relative xpath of elder cousin)/following::tagName of younger cousin

    //input[@id='username']/following::label

8. Younger cousin to Elder cousin

Syntax: 
    (Relative xpath of younger cousin)/preceeding::tagName of elder cousin

    //label[text()='password']/preceeding::input


Playwright Locators:

--> It is an inbuild locators in PW. It's more efficent & reliable way to find the locators. It is very fast and less flaky

--> PW has 7 inbuild locators as follows

1. getByRole() --> check accessibility and write locator using role --> p1
2. getByText() --> use this when we have visible text
3. getByLabel() --> use this when text present inside <label> tag
4. getByTitle() --> use this when we have title inside <title> tag and also when we have attribute title
5. getByPlaceholder() --> use this when we have placeholder atttribute
6. getByAltText() --> use this when we have Alttext attribute
7. getByTestId()  --> use this when we have data-test Id -->  p1

Refer assignment files for more info


Summary:
3 types of locators
1. CSS --> p2
2. Xpath --> p3
3. PW locators --> p1
