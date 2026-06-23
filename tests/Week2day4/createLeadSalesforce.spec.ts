import {test,expect} from '@playwright/test'

test('Salesforce - Create Lead', async({page}) => {
await page.goto('https://testleaf.my.salesforce.com/')
await page.locator(`//input[contains(@class,'username')]`).fill('dilipkumar.rajendran@testleaf.com')  // Partial attribute text based xpath
await page.locator(`//input[contains(@class,'password')]`).fill('TestLeaf@2025') // Partial attribute text based xpath
await page.locator(`//input[contains(@id,'Log')]`).click() // Partial attribute text based xpath
await page.locator(`//button[contains(@class,'waffle')]`).click() // Partial attribute text based xpath
await page.waitForTimeout(2000)
await page.locator(`//button[@aria-label='View All Applications']`).click()
await page.waitForTimeout(2000)
await page.locator(`//p[text()='Sales']`).click()
await page.locator(`//a[@title='Leads']`).click() // Partial attribute text based xpath
await page.locator(`//a[@title='New']`).click() // Attribute based xpath
await page.locator(`//button[@name='salutation']`).click()
await page.locator(`//span[@title='Mr.']`).click()
await page.locator(`//input[contains(@placeholder,'Last')]`).fill('Ponsam')
await page.locator(`//input[@name='Company']`).fill('Testleaf Inc')
await page.locator(`//button[@name='SaveEdit']`).click()
const leadName = await page.locator(`//lightning-formatted-name[@slot='primaryField']`).innerText()
expect(leadName).toBe('Mr. Ponsam')
})