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