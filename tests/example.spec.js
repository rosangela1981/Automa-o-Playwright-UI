// @ts-check
import { test, expect } from '@playwright/test';
import { time } from 'console';
import path from 'path/win32';


test.use({
  geolocation: { longitude: 41.890221, latitude: 12.492348 },
  permissions: ['geolocation'],
})  

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.automationpratice.com.br/') , { timeout: 60000 };
});

test('Login com sucesso @login', async ({ page }) => {
  const texto = await page.waitForSelector('text=NEWSLETTER');
  await texto.scrollIntoViewIfNeeded()
  
  await page.getByRole('button', { name: 'Send Mail' }).click();
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('rosangelanascimentotecnol@gmail.com');
    await page.screenshot({ path: 'screenshot1.png', fullPage: true });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/test1_elemento_senha.png' });
  await page.screenshot({ path: 'screenshot2.png', fullPage: true });
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Login realizado')).toBeVisible();
  await page.screenshot({ path: 'screenshot3.png', fullPage: true });
 
});



test('Login com sucesso 1 @login', async ({ page }) => {
  const texto = await page.waitForSelector('text=NEWSLETTER');
  await texto.scrollIntoViewIfNeeded()
  
  await page.getByRole('button', { name: 'Send Mail' }).click();
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('rosangelanascimentotecnol@gmail.com');
    await page.screenshot({ path: 'screenshot1.png', fullPage: true });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/test1_elemento_senha.png' });
  await page.screenshot({ path: 'screenshot2.png', fullPage: true });
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Login realizado')).toBeVisible();
  await page.screenshot({ path: 'screenshot3.png', fullPage: true });
 
});


test('Login com sucesso 2 @login', async ({ page }) => {
  const texto = await page.waitForSelector('text=NEWSLETTER');
  await texto.scrollIntoViewIfNeeded()
  
  await page.getByRole('button', { name: 'Send Mail' }).click();
  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('rosangelanascimentotecnol@gmail.com');
    await page.screenshot({ path: 'screenshot1.png', fullPage: true });
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/test1_elemento_senha.png' });
  await page.screenshot({ path: 'screenshot2.png', fullPage: true });
  await page.getByRole('button', { name: 'login' }).click();
  await expect(page.getByText('Login realizado')).toBeVisible();
  await page.screenshot({ path: 'screenshot3.png', fullPage: true });
 
});

test.afterEach(async ({ page }) => {
  await page.close();
})