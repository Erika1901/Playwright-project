import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ztrain-web.vercel.app/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('ngaedzoa98@gmail.com');
  await page.getByPlaceholder('Mot de passe').click();
  await page.getByPlaceholder('Mot de passe').fill('Malika2016*');
  await page.locator('#btn_login').click();
  await page.locator('#style_popular_product_wrapper__z6J0h').getByRole('button').click();
  await page.locator('#style_content_cart_wrapper__mqNbf').click();
  await page.locator('#style_card_wrapper__hrc1I div').nth(4).click();
  await page.locator('#style_content_cart_header__NIJbw svg').click();
});