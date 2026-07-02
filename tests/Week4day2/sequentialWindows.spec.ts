import {test} from '@playwright/test'

test('sequential way of handling windows', async({page,context}) => {
    await page.goto('https://www.amazon.in/')
    await page.locator(`//button[text()='Continue shopping']`).click()

    let searchBox = page.getByPlaceholder('Search Amazon.in').last()
    await searchBox.fill('Iphone')
    await searchBox.press('Enter')


    let eventListener = page.context().waitForEvent('page') // parent window
    await page.locator(`(//span[contains(text(),'iPhone 17 Pro 512 GB')])[1]`).click()
    await page.waitForTimeout(2000)
    let resolveEvent = await eventListener // child window
    let title = await resolveEvent.title()
    console.log(title)
    let price = await resolveEvent.locator(`//span[text()='1,54,900']`).last().innerText()
    console.log(price)
    await resolveEvent.bringToFront()
    
    let resultText=await page.locator(`//h2[text()='Results']`).innerText()
    await page.waitForTimeout(3000)
    console.log(resultText)
    console.log(await page.title())
    console.log(page.url())
    page.bringToFront()
    await page.waitForTimeout(3000)
    console.log(await page.title())
    console.log(page.url())

})