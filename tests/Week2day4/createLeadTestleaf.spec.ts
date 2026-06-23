import {test} from '@playwright/test'

test('Testleaf - Create Lead', async({page}) => {
await page.goto('http://leaftaps.com/opentaps/control/main')
await page.locator(`//input[@id='username']`).fill('demoCSR2')   // Attribute based xpath
await page.locator(`//label[text()='Password']`).fill('crmsfa')  // text based xpath
await page.locator(`//input[contains(@class,'Submit')]`).click() // Partial attribute text based xpath
await page.locator(`//a[contains(text(),'CRM')]`).click()
await page.locator(`//a[text()='Leads']`).click()
await page.locator(`//a[text()='Create Lead']`).click()
await page.locator(`//input[contains(@id,'Form_company')]`).fill('MyCompany2')
await page.locator(`#createLeadForm_firstName`).fill('Loki')
await page.locator(`#createLeadForm_lastName`).fill('SpeakerEdition')
await page.locator(`//input[@name='personalTitle']`).fill('Ms.')
await page.locator(`//input[@name='generalProfTitle']`).fill('My Title New')
await page.locator(`//input[@name='annualRevenue']`).fill('20000')
await page.locator(`//input[@name='departmentName']`).fill('My department')
await page.locator(`//input[contains(@id,'PhoneNum')]`).fill('5656565656')
await page.locator(`//input[@value='Create Lead']`).click()

// Edit Lead
await page.locator(`//a[text()='Edit']`).click()
await page.locator(`//input[contains(@id,'Form_company')]`).fill('YourCompany')
await page.locator(`//input[@value='Update']`).click()
})