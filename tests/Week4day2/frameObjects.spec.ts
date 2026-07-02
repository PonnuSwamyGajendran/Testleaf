/* Frame Objects
It will be handled either by URL or by name only
Even if you have nested frame, you can directly access the inner frame using frame object with url/name
Syntax:
    const frameref = page.frame({url:'url link'})
    await frameref?.locator('element locator').click
    ? --> It will check whether frame is available or not 
    If available, it will handle it
    If frame is not present, it won't give any error and it returns undefined or null*/
    
import {test} from '@playwright/test'

test('Frame using frame objects', async({page}) => {
    await page.goto('https://www.leafground.com/frame.xhtml')
    const frameref = page.frame({url: 'https://www.leafground.com/framebutton.xhtml'})
    let textBeforeClick = await frameref?.locator(`#Click`).innerText()
    console.log(textBeforeClick)
    await frameref?.locator(`#Click`).click()
    let textAfterClick = await frameref?.locator(`#Click`).innerText()
    console.log(textAfterClick)
})