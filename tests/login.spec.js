import { test, expect } from '@playwright/test';
import login_data from './login.json'

test('test', async ({ page }) => {
  await page.goto('https://ztrain-web.vercel.app/auth/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(login_data.login);
  await page.getByPlaceholder('Mot de passe').click();
  await page.getByPlaceholder('Mot de passe').fill(login_data.password);
  await page.locator('#btn_login').click();
  await page.goto('https://ztrain-web.vercel.app/home');
});