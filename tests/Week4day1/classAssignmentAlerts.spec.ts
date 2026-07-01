import {test} from '@playwright/test'
test('prompt alert', async({page}) => {
    await page.goto(`https://www.leafground.com/alert.xhtml`)

    page.on('dialog', async (alert) => {
        let alertType = alert.type()
        await alert.accept('Playwright')

    })
    await page.locator(`(//span[text()='Show'])[5]`).click()
})
test.only('prompt alert - Multiple', async({page}) => {
    await page.goto(`https://www.leafground.com/alert.xhtml`)

    page.on('dialog', async (alert1) => {
        let alertType1 = alert1.type()
        console.log(alertType1)
        
        switch(alertType1) {
            case "simple":
                await alert1.accept()
                break
            
            case "confirm":
                await alert1.dismiss()
                break
            
            case "prompt":
                await alert1.accept('Playwright')
                break
            
            default:
                await alert1.dismiss()
        }

    })
    await page.locator(`(//span[text()='Show'])[1]`).click()
    await page.locator(`(//span[text()='Show'])[2]`).click()
    await page.locator(`(//span[text()='Show'])[5]`).click()
})
