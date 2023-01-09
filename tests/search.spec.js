import { test, expect } from '@playwright/test';
const datas = require("./data_search.json");
import login_data from './login.json'


  datas.forEach( (data) => {
    test(`test ${data.name}`, async ({ page }) => {
      await page.goto('https://ztrain-web.vercel.app/auth/login');
      await page.getByPlaceholder('Email').click();
      await page.getByPlaceholder('Email').fill(login_data.login);
      await page.getByPlaceholder('Mot de passe').click();
      await page.getByPlaceholder('Mot de passe').fill(login_data.password);
      await page.locator('#btn_login').click();
      await page.getByPlaceholder('Rechecher un produit').click();
      await expect ( page.getByPlaceholder('Rechecher un produit')).toBeVisible();
      await page.getByPlaceholder('Rechecher un produit').fill(data.name);
    
    });
  });
