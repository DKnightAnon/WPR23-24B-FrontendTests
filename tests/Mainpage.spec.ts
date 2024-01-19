// @ts-check
import { test, expect } from '@playwright/test';

test('Moving from /home to /contact has 2 titles `contact`', async ({ page }) => {
    await page.goto('https://wpr23-24b.azurewebsites.net/');
  
    await page.getByRole('link', {name : 'Contact'}).click();

    await expect(page.getByRole('heading', { name: 'Contact'})).toHaveCount(2)

    await page.getByRole('heading', {name: "Contact", exact:true}).isVisible();
  });


  test('Expect navigationbar to be visible', async ( {page}) => {
    await page.goto('https://wpr23-24b.azurewebsites.net/');

    await page.getByRole('banner').isVisible();

  });

