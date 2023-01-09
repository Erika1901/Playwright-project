import { test, expect } from '@playwright/test';
import login_data from './login.json'

test('test', async ({ page }) => {
  await page.goto('https://ztrain-web.vercel.app/auth/login');
  await page.getByRole('link', { name: 'S\'inscrire' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(login_data.login);
  await page.locator('#password_register').click();
  await page.locator('#password_register').fill(login_data.password);
  await page.getByPlaceholder('Confirmer votre mot de passe').click();
  await page.getByPlaceholder('Confirmer votre mot de passe').fill('Malika2016+');
  await page.getByRole('button', { name: 'Inscription' }).click();
  await page.goto('https://ztrain-web.vercel.app/home');
});