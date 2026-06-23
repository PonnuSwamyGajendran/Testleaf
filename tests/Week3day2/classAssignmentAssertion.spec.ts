import {test,expect} from '@playwright/test'

test('Assertions in Playwright', async ({page}) =>{
    await page.goto('https://leafground.com/input.xhtml')
    await expect(page.locator(`//input[@placeholder='Disabled']`)).toBeDisabled()
    const nameField = page.locator(`//input[@placeholder='Babu Manickam']`)
    await expect(nameField).toBeEditable()
    const cityField = page.locator(`//input[@value='Chennai']`)
    await expect.soft(cityField).toBeDisabled() // soft assertion
    const clearTextbox = page.locator(`//input[@value='Can you clear me, please?']`)
    await clearTextbox.clear()
    await clearTextbox.fill('Playwright Learning')
})