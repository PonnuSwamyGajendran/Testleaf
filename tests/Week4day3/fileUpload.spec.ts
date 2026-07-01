/*
File Upload: Upload files into an application using PW

Types of Upload:
1. Using <input type="file"> (When DOM has this for uplaod button then go with type f upload)
2. Using Event listener

1. Using <input type="file"> (When DOM has this for uplaod button then go with type f upload)
Syntax:
page.locator('').setInputFiles('path') // path --> Utils/filename.extension --> Relative path

2. Using Event listener
    Syntax:
    1. Create a lister (this return promise)
    2. Trigger action (click action on locator)
    3. Resolve promise 
*/

import {test,expect} from  '@playwright/test'
import path from 'path'

test('Upload file using <input type="file">', async ({page}) => {
    await page.goto('https://leafground.com/file.xhtml')
    await page.locator(`(//input[@type='file'])[1]`).setInputFiles('Utils/Anatomy.png') // relative path (avoid using this relative path in real time)

    const fileName = page.locator(`//span[@class='ui-fileupload-filename']`)

    // validation using innertext 
    expect(await fileName.innerText()).toBe('Anatomy.png 1.5 MB') // look for exact match
    expect(await fileName.innerText()).toContain('Anatomy') // partial match
    
    //Locator based assertions
    expect(fileName).toHaveText('Anatomy.png 1.5 MB') // look for exact match
    expect(fileName).toContainText('Anatomy') // look for partial match
    expect(fileName).toHaveText(/Anatomy.*/) // validate using regular expression

})

test.only('Upload file using Event listener', async({page}) => {
    await page.goto('https://leafground.com/file.xhtml')

    // 1. Create a event listener and it returns a promise

    let eventListener = page.waitForEvent('filechooser')

    // Trigger action
    await page.locator(`//span[contains(@class,'ui-fileupload')]/span`).first().click()

    // Resolve promise
    let uploadReference = await eventListener
    await uploadReference.setFiles(path.join(__dirname, '../../Utils/Anatomy.png'))  // absolute path (Recommended)

    const nameofFile = await page.locator(`//span[@class='ui-fileupload-filename']`).innerText()
    expect(nameofFile).toContain('Anatomy')

})