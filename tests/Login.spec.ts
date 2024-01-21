import { test, expect } from '@playwright/test';

test('login as user - invalid sign in', async ({ page }) => {

    await page.goto('https://wpr23-24b.azurewebsites.net/');

    await page.getByRole('link', { name: 'Inloggen' }).click(); await page.goto('https://wpr23-24b.azurewebsites.net/login');
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('test@email.com');
    await page.getByPlaceholder('Emailadres').press('Tab');
    await page.getByPlaceholder('Wachtwoord').fill('Sterwachtwoord1@');
    await page.getByLabel('Login Knop').click();
    await page.getByText('Ongeldige inloggegevens of er').click();





});

test('login as user - valid sign in', async ({ page }) => {
    // await page.goto('https://wpr23-24b.azurewebsites.net/');
    // await page.locator('h1').click();
    // await page.getByRole('link', { name: 'Inloggen' }).click();
    // await page.getByPlaceholder('Emailadres').click();
    // await page.getByPlaceholder('Emailadres').fill('user@example.com');
    // await page.getByPlaceholder('Wachtwoord').click();
    // await page.getByPlaceholder('Wachtwoord').fill('SterkWachtwoord@2');
    // await page.getByLabel('Login Knop').click();

    await page.goto('https://wpr23-24b.azurewebsites.net/');
    await page.getByRole('link', { name: 'Inloggen' }).click();
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('user@example.com');
    await page.getByPlaceholder('Emailadres').press('Tab');
    await page.getByPlaceholder('Wachtwoord').fill('SterkWachtwoord@2');
    await page.getByPlaceholder('Wachtwoord').press('Tab');
    await page.getByLabel('Login', { exact: true }).press('Tab');
    await page.getByLabel('Login Knop').press('Enter');
    await page.getByRole('heading', { name: 'Welkom bij het' }).click();
    await page.getByText('Uw centrale hub voor').click();



});

test('login as company - invalid sign in', async ({ page }) => { });

test('login as user - navigate to chat', async ({ page }) => {


await page.goto('https://wpr23-24b.azurewebsites.net/login');
await page.getByPlaceholder('Emailadres').click();
await page.getByPlaceholder('Emailadres').fill('user@example.com');
await page.getByPlaceholder('Emailadres').press('Tab');
await page.getByPlaceholder('Wachtwoord').click();
await page.getByPlaceholder('Wachtwoord').press('Shift+Tab');
await page.getByPlaceholder('Emailadres').press('Tab');
await page.getByPlaceholder('Wachtwoord').fill('SterkWachtwoord@2');
await page.getByLabel('Login Knop').click();
await page.getByRole('heading', { name: 'Welkom bij het' }).click();
await page.getByRole('link', { name: 'Chat' }).click();
await page.getByLabel('Huidige verbonden gesprek').click();
// await page.getByText('System - 1/21/2024, 2:47:04 PM Deze chatgroep heeft nog geen berichten!').click();
});

test('no login - check if private routing elements exists - should not exist ', async ({ page }) => { 
    await page.goto('https://wpr23-24b.azurewebsites.net/');
    await page.getByRole('banner').click();
    await page.getByText('HomeAboutServicesNewsContactInloggen').click();
    await expect(page.getByRole('link', {name:'Chat'})).toHaveCount(0);
    await expect(page.getByRole('link', {name:'Beheer'})).toHaveCount(0);
});

test('no login - check if private routing elements exists - should exist ', async ({ page }) => { 
    await page.goto('https://wpr23-24b.azurewebsites.net/');
await page.getByRole('link', { name: 'Inloggen' }).click();

await page.getByPlaceholder('Emailadres').click();
await page.getByPlaceholder('Emailadres').fill('user@example3.com');
await page.getByPlaceholder('Wachtwoord').click();
await page.getByPlaceholder('Wachtwoord').click();
await page.getByPlaceholder('Wachtwoord').fill('SterkWachtwoord@2');

    // await expect(page.getByRole('link', {name:'Chat'})).toHaveText("Chat");
    // await expect(page.getByRole('link', {name:'Beheer'})).toHaveCount(1);
});

