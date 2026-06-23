import {test} from '@playwright/test'

test('Dropdown Functionality' , async({page}) => {
    await page.goto('https://www.leafground.com/select.xhtml')
    const dropdown = page.locator(`//select[contains(@class,'selectonemenu')]/option`)
    const totalCount = await dropdown.count()
    console.log(totalCount)

    for (let index=0; index<5; index++){   
        console.log(await dropdown.nth(index).innerText())
    }

})