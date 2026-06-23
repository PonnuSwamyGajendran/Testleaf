import {test} from '@playwright/test'

test('storageState using playwright', async({page}) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.locator('#username').fill('demoCSR2')
    await page.locator('#password').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.context().storageState({path: 'Data/storageState.json'})
})