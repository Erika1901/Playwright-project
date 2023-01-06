import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ztrain-web.vercel.app/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('ngaedzoa98@gmail.com');
  await page.getByPlaceholder('Mot de passe').click();
  await page.getByPlaceholder('Mot de passe').fill('Malika2016*');
  await page.locator('#btn_login').click();
  //page.pause;
  try {
    
  page.setDefaultNavigationTimeout(30000)
  await page.locator('#style_avatar_wrapper__pEGIQ svg').nth(1).click();
  await page.getByRole('link', { name: 'Se déconnecter' }).click();
  
  } catch (error) {
    console.log("Closed the browser")
    await browser.close();
  }
  
});