import {test} from '@playwright/test'

test('Playwright Locators', async({page}) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
    await page.getByRole('link', {name:'Forgot login info?'}).click()
    await page.getByAltText('ParaBank', {exact: true}).click()
    await page.getByText('Locations', {exact: true}).first().click()
    await page.waitForTimeout(2000)
    await page.getByRole('button').nth(1).click()
    //await page.locator(`//form[@action='/search']`).click()
    await page.locator(`//form//input`).fill('CHENNAI') // Grand parent to grand child
})