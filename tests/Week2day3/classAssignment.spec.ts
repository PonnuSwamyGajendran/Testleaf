import {test, expect} from '@playwright/test'

test('Login CRM', async({page}) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('demoCSR2')
    await page.locator('.inputLogin').nth(1).fill('crmsfa')
    await page.locator(`[class='decorativeSubmit']`).click()
    await page.locator(`text='CRM/SFA'`).click()
    let pagetitle = await page.title()
    console.log(pagetitle)
    let pageurl = await page.url()
    console.log(pageurl)
    await expect(page).toHaveTitle('My Home | opentaps CRM')
    //await expect(page).toHaveURL('https://leaftaps.com/crmsfa/control/main?externalLoginKey=EL419578382544')

    /* when same locators value matches multiple elements then follow:
    nth(0) or first() --> for 1st match
    nth(1) --> 2nf match
    nth(n) or last() --> last match
    */
})

test('Login Salesforce', async({page}) => {
    await page.goto('https://login.salesforce.com/?locale=in')
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator(`input[class='button r4 wide primary']`).click()
    let pagetitle1 = await page.title()
    console.log(pagetitle1)
    let pageurl1 = await page.url()
    console.log(pageurl1)
    await expect(page).toHaveTitle('Home | Salesforce')
    await expect(page).toHaveURL('https://testleaf.lightning.force.com/lightning/page/home')

})