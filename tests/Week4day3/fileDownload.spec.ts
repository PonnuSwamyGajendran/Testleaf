/*
Download file can be handled by only one way which is event listener */

import {test, expect} from '@playwright/test'

test('File Download', async({page}) => {
    await page.goto('https://leafground.com/file.xhtml')

    let eventListener = page.waitForEvent('download') // creating event listener and it returns promise
    await page.locator(`//span[text()='Download']`).click() // trigger action
    let resolveEvent = await eventListener // resolve promise
    await resolveEvent.saveAs('Data/testdownload2.jpeg') //set custom path to save your file

    // Save it using browser suggested name - 2 way of using it as below
   // await resolveEvent.saveAs(`Data/${resolveEvent.suggestedFilename()}`) // way 1 
    const downloadedFileName = await resolveEvent.saveAs(`Data/`+resolveEvent.suggestedFilename()) // way2
    expect(resolveEvent).toBeTruthy() // verify if file is downloaded or not
})