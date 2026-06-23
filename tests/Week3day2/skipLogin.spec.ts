import {test} from '@playwright/test'

//test.use({storageState: 'Data/storageState.json'}) // Instead of use it in spec file , use it in pw config file (Either use in spec file or in config file.)
test('Skip Login using storageSession', async({page}) => {
    await page.goto('https://leaftaps.com/opentaps/control/login')
    await page.locator(`//a[contains(text(),'CRM')]`).click()
})