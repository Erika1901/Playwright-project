import { test, expect } from '@playwright/test';
import login_data from './login.json'

test('test', async ({ page }) => {
  await page.goto('https://ztrain-web.vercel.app/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(login_data.login);
  await page.getByPlaceholder('Mot de passe').click();
  await page.getByPlaceholder('Mot de passe').fill(login_data.password);
  await page.locator('#btn_login').click();
  
  try {
    
  page.setDefaultNavigationTimeout(30000)
  await page.locator('#style_avatar_wrapper__pEGIQ svg').nth(1).click();
  await page.getByRole('link', { name: 'Se déconnecter' }).click();
  
  } catch (error) {
    console.log("Closed the browser")
    await browser.close();
  }
  
});