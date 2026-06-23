Playwright has its own inbuild locators called Playwright locators. 

Types of PW locators:
1. getByRole()  --> p1 --> Example uage: page.getByRole('locator', {attribute: 'attrribute value'}).fill('')
2. getByLable() --> Example Usage: page.getByLabel('locator', {exact: true}).click()
3. getByText() --> Example Usage: page.getByText('locator', {exact: true}).click()
4. getByTitle() --> Example Usage: page.getByTitle('locator', {exact: true}).click()
5. getByPlaceholder() --> Example Usage: page.getByPlaceholder('locator', {exact: true}).click()
6. getByAltText() --> Example Usage: page.getByAltText('locator', {exact: true}).click()
7. getByTestId() --> p1 --> Example Usage: page.getByTestId('locator', {exact: true}).click()


1. getByRole()  --> use the accessibility role and name to be more specific
2. getByLable() --> use this when the element is inside tag <lable>
3. getByText()  --> use this when there is a visible text
4. getByTitle() --> use this when the element is inside tag <Title>
5. getByPlaceholder() --> use this when there is a placeholder attribute 
6. getByAltText() --> use this when there is an attribute AltText
7. getByTestId() --> use this when there is an attribute data-testId 