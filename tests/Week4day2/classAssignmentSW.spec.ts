import {test} from '@playwright/test'

test('Handling single window or sequential window', async({page,context}) => {
    await page.goto('https://leafground.com/window.xhtml')
   let parentWindow = context.waitForEvent('page') // use this also --> let parentWindow = page.context().waitForEvent('page') by removing context fixuture in title (But recommended is start with context)
   page.locator(`//span[text()='Open']`).click()
   let childWindow = await parentWindow
   await childWindow.waitForTimeout(2000)
   const childWindowTitle = await childWindow.title()
   console.log(childWindowTitle)
   const childWindowURL = childWindow.url()
   console.log(childWindowURL)
   await childWindow.getByLabel('E-mail Address').fill('ponsamgs@gmail.com')
   await childWindow.bringToFront()
   await page.getByPlaceholder('Search...').fill('I am at parent window')
})