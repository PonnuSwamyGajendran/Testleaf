

/* --------- Pending Task (facing issue in identifying pw locators as it has less information to find)-------- */

import {test} from '@playwright/test'

test('Testleaf - Create Lead using Playwright Locators' , async({page}) => {
    await page.goto('https://leaftaps.com/opentaps/control/main')
    await page.getByRole('textbox', {name:'Username'}).fill('Demosalesmanager')
    await page.getByLabel('Password', {exact: true}).fill('crmsfa')
    await page.getByRole('button', {name:'Login'}).click()
    await page.getByText('CRM/SFA').click()
    await page.getByRole('link', {name:'Leads'}).click()
    await page.getByText('Create Lead', {exact: true}).first().click()
    await page.getByRole('textbox', {name: 'companyName'}).fill('pwc')
    await page.getByRole('textbox').nth(3).fill('ponsam')
    await page.getByRole('textbox').nth(4).fill('sg')
    await page.getByRole('textbox').nth(7).fill('Mr.')
    await page.getByRole('textbox').nth(9).fill('Senior Test Engineer')
    await page.getByRole('textbox').nth(10).fill('Test Domain')
    await page.getByRole('textbox').nth(11).fill('10000')
    await page.getByRole('textbox').nth(20).fill('888888888888')
    await page.getByRole('button', {name: 'Create Lead'}).click()
})