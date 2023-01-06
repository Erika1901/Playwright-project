import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ztrain-web.vercel.app/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('ngaedzoa98@gmail.com');
  await page.getByPlaceholder('Mot de passe').click();
  await page.getByPlaceholder('Mot de passe').fill('Malika2016*');
  await page.locator('#btn_login').click();
  await page.locator('div:nth-child(5) > .style_card_body__QuFGN > span > .style_card_body_img__mkV1D').click();
  await page.getByRole('button', { name: 'Ajouter au panier' }).click();
  await page.locator('#style_content_cart_wrapper__mqNbf').click();
  page.pause;
  await page.locator('#style_card_wrapper__hrc1I div').filter({ hasText: 'Fauteuil Chaise...263.88 €12' }).locator('svg').nth(2).click();
});