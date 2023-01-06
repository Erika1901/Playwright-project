import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ztrain-web.vercel.app/auth/login');
  await page.getByRole('link', { name: 'S\'inscrire' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('GraceRKyle@jourrapide.com');
  await page.locator('#password_register').click();
  await page.locator('#password_register').fill('Malika2016+');
  await page.getByPlaceholder('Confirmer votre mot de passe').click();
  await page.getByPlaceholder('Confirmer votre mot de passe').fill('Malika2016+');
  await page.getByRole('button', { name: 'Inscription' }).click();
  await page.goto('https://ztrain-web.vercel.app/home');
});