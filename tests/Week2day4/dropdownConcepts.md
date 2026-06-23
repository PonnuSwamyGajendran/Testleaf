Dropdowns:
a. Native dropdown
b. Custom dropdown

Native Dropdown  --> Whenever the element starts with <select> tag then its called Native dropdown
Custom Dropdown --> If dropdown starts with any other tag (other than <select> tag) then its called custom dropdown

3 Ways to handle a dropdown:
1. Select by Value (p1)
2. Select by Visible text(Label) (p2)
3. Select by Index (p3)

Example HTML:
<select id="country">
    <option value="IN">India</option>
    <option value="US">United States</option>
    <option value="UK">United Kingdom</option>
</select>

1. Select by Value:

    Syntax:
    await page.locator('').selectOptions({value: ''})
     
    Example:
        await page.locator('#country').selectOption('IN');
        or
        await page.locator('#country').selectOptions({value: 'IN'})

2. Select by Visible Text (Lable):

    Syntax:
    await page.locator('').selectOptions({label: ''})

    Example:
        await page.locator('#country').selectOptions({label: 'India'})

3. Select by Index:

    Syntax:
    await page.locator('').selectOptions({Index: Index value}) //Index value can be either 0 or 1 or 2,..

    Example:
        await page.locator('#country').selectOptions({index: 1})




