import {expect, test} from '@playwright/test'

test('File Download using custom path', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download')
    let eventListener1 = page.waitForEvent('download')
    await page.locator(`//a[text()='cognizant.png']`).click()
    let resolveEvent1 = await eventListener1
    resolveEvent1.saveAs('Utils/cogni.jpeg')
    expect(resolveEvent1).toBeTruthy()
})

test('File Download using browser suggested file name', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download')
    let eventListener2 = page.waitForEvent('download')
    await page.getByRole('link', {name: 'generated_logo.png'}).click()
    let resolveEvent2 = await eventListener2
    resolveEvent2.saveAs(`Utils/${resolveEvent2.suggestedFilename()}`)
    expect(resolveEvent2).toBeTruthy()
})

test.only('File Download inside loop', async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/download')
    let elements = page.locator(`//a[contains(@href,'download')]`)
    let elementCount = await elements.count()
    console.log(elementCount)
    for(let i=1; i<elementCount; i++){
        let text = await page.locator(`//a[contains(@href,'download')]`).nth(i).innerText()
        console.log(text)
        if(text === 'sample_upload.txt'){
            let eventListener3 = page.waitForEvent('download')
            await page.locator(`//a[contains(@href,'download')]`).nth(i).click()
            let resolveEvent3 = await eventListener3
            await resolveEvent3.saveAs('Data/loopImage.xlsx')
            expect(resolveEvent3).toBeTruthy()
        }
    }
})