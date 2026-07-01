import {test, expect} from '@playwright/test'

test('Learn Frames', async({page}) => {
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')

    page.on('dialog', async(alert) => {
        await alert.accept()
    })
    const frameElement = page.frameLocator(`//iframe[@id='iframeResult']`)
    const button = frameElement.getByText('Try it')
    const beforeButtonClick = await button.innerText()
    console.log(beforeButtonClick)
    await button.click()
    const message = frameElement.locator('#demo')
    const userMessage= await message.innerText()
    console.log(userMessage)
    //expect(userMessage).toBe('You pressed OK!')  //use this one or below one for validation
    expect(userMessage, 'You pressed OK!')
})
