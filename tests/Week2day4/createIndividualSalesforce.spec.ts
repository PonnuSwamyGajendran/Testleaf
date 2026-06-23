import {test,expect} from '@playwright/test'
// Create Individuals

test('Salesforce - Create Individuals',  async({page}) => {
    await page.goto('https://testleaf.my.salesforce.com/')
    await page.locator(`//input[contains(@class,'username')]`).fill('dilipkumar.rajendran@testleaf.com')  // Partial attribute text based xpath
    await page.locator(`//input[contains(@class,'password')]`).fill('TestLeaf@2025') // Partial attribute text based xpath
    await page.locator(`//input[contains(@id,'Log')]`).click() // Partial attribute text based xpath
    await page.locator(`//button[contains(@class,'waffle')]`).click() // Partial attribute text based xpath
    await page.waitForTimeout(2000)
    await page.locator(`//button[@aria-label='View All Applications']`).click()
    await page.waitForTimeout(2000)
    await page.locator(`//input[contains(@placeholder,'Search apps')]`).fill('individuals')
    await page.locator(`//a[@data-label='Individuals']`).click()
    await page.locator(`//a[@title='New']`).click()
    await page.locator(`//a[@class='select']`).first().click()
    await page.locator(`//a[@title='Mr.']`).click()
    await page.locator(`//input[contains(@class,'lastName')]`).fill('lastname')
    await page.locator(`//button[@title='Save']`).last().click()
})

// Edit Individuals

test('Salesforce - Edit Individuals', async({page}) => {
    await page.goto('https://testleaf.my.salesforce.com/')
    await page.locator(`//input[contains(@class,'username')]`).fill('dilipkumar.rajendran@testleaf.com')  // Partial attribute text based xpath
    await page.locator(`//input[contains(@class,'password')]`).fill('TestLeaf@2025') // Partial attribute text based xpath
    await page.locator(`//input[contains(@id,'Log')]`).click() // Partial attribute text based xpath
    await page.locator(`//button[contains(@class,'waffle')]`).click() // Partial attribute text based xpath
    await page.waitForTimeout(2000)
    await page.locator(`//button[@aria-label='View All Applications']`).click()
    await page.waitForTimeout(2000)
    await page.locator(`//input[contains(@placeholder,'Search apps')]`).fill('individuals')
    await page.locator(`//a[@data-label='Individuals']`).click()
    const searchBox = page.locator(`//input[@placeholder='Search this list...']`)
    await searchBox.fill('lastname')
    await searchBox.press('Enter')
    await page.locator(`//a[@title='lastname']`).click()
    const correctName = await page.locator(`//span[@class='uiOutputText']`).innerText()
    expect(correctName.trim()).toBe('Mr. lastname')
    await page.locator(`//a[@title='Edit']`).click()
    await page.locator(`//a[@class='select']`).first().click()
    await page.locator(`//a[@title='Ms.']`).click()
    await page.locator(`//input[@placeholder='First Name']`).fill('firstname')
    await page.locator(`//button[@title='Save']`).last().click()
})