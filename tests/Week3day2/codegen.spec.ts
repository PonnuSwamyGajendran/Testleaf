import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://leaftaps.com/opentaps/control/main');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('demoCSR2');
  await expect(page.locator('#login')).toContainText('Password');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa');
  await expect(page.getByRole('button')).toContainText('Login');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#label')).toContainText('CRM/SFA');
  await page.getByRole('link', { name: 'CRM/SFA' }).click();
});