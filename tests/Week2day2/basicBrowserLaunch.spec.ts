/*
Browser
Context
Page
 */

import {chromium, test} from '@playwright/test'

test('launchBrowser', async ({page}) => {
    await page.goto('https://platform.testleaf.com/#/')
    await page.waitForTimeout(3000)
})

test('launchBrowser1', async() => {
    const browser= await chromium.launch({headless:false, channel:'chrome'})
    const context=await browser.newContext()
    const page= await context.newPage()
    page.goto('https://www.amazon.in/')
    await page.waitForTimeout(3000)
})