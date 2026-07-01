import {test, expect} from '@playwright/test'

test('Book Ticket', async({page}) => {
    await page.goto('https://www.pvrcinemas.com/')
    //await page.locator(`//span[@class='cities-placed']`).last().click()
    console.log('clicked')
    await page.getByText('Chennai').last().click()
    await page.getByText('Select Movie').last().click()
    await page.locator(`(//ul[@ class='p-dropdown-items'])/li/span[contains(text(),'SUPERGIRL')]`).click()
    await page.locator(`//span[contains(text(),'Tomorrow')]`).click()
    await page.locator(`//span[text()='PVR Heritage RSL ECR Chennai']`).last().click()
    await page.locator(`//span[@class='mx-2']/ancestor::li`).nth(3).click()


    //console.log(showTime)
    // let dailyShow = await showTime.count()

    // for(let i=1; i<=dailyShow; i++) {
    //     let innertext = await page.locator(`//span[@class='mx-2']/ancestor::li`).innerText()[i]
    //     console.log(innertext)
    // }

    // //li[@class='p-dropdown-item']/span
    // let showTime = page.locator(`//li[@class='p-dropdown-item']/span`)
    // let dailyShow = await showTime.count()
    // console.log(dailyShow)

    // for(let i=1; i<=dailyShow; i++) {
    //     let innertext = await page.locator(`//li[@class='p-dropdown-item']/span`).innerText()[i]
    //     console.log(innertext)
    // }

    await page.getByRole('button', {name: 'Submit'}).click({timeout: 3000})
    await page.getByRole('button', {name: 'Accept'}).click()


    // let rows = page.locator(`//span[contains(text(),'CLUB')]/following::tr`)
    // let count = rows.count()
    // console.log(count)
    // for(let i=0; i<rows; i++) {

    // }
    //await page.locator(`//tr[@class='seats-row']//span[@class='seat-selected-pvr']`).click()
    await page.locator(`//span[contains(@id,'F:4')]`).click()
    let seatNumber = await page.locator(`//div[@class='seat-number']/p`).innerText()
    expect(seatNumber,'F4')
    let grandTotal = await page.locator(`//div[@class='grand-prices']//h6`).innerText()
    grandTotal = grandTotal.trim()
    console.log(grandTotal)
    expect(grandTotal).toBe('286.10')

})