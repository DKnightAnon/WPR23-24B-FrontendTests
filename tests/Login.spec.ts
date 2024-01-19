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
    await page.goto('https://wpr23-24b.azurewebsites.net/');
    await page.locator('h1').click();
    await page.getByRole('link', { name: 'Inloggen' }).click();
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('user@example.com');
    await page.getByPlaceholder('Wachtwoord').click();
    await page.getByPlaceholder('Wachtwoord').fill('SterkWachtwoord@2');
    await page.getByLabel('Login Knop').click();
    await page.getByText('Gebruiker GegevensOnderzoeken').click();
    await page.getByRole('heading', { name: 'Gebruiker Gegevens' }).click();
    await page.getByText('Mijn GegevensVolledige').click();
    await page.getByText('Volledige Naam').click();
    await page.getByText('Emailadres:').click();
    await page.getByText('Telefoonnummer:', { exact: true }).click();
    await page.getByText('Postcode:').click();
    await page.getByText('Geboortedatum:').click();
    await page.getByRole('heading', { name: 'Mijn Communicatievoorkeur' }).click();
    await page.getByRole('heading', { name: 'Mijn Communicatievoorkeur' }).click();



});

test('login as company - invalid sign in', async ({ page }) => { });

test('login as user - navigate to chat', async ({ page }) => {

    //Klikken op berichten gaat fout. Misschien omdat het een div in een list element is?
    await page.goto('https://wpr23-24b.azurewebsites.net/');
    await page.locator('section').filter({ hasText: 'Stichting AccessibilitySamen' }).click({ button: 'right' });
    await page.getByRole('link', { name: 'Inloggen' }).click();
    await page.getByPlaceholder('Emailadres').click();
    await page.getByPlaceholder('Emailadres').fill('user@example.com');
    await page.getByPlaceholder('Emailadres').press('Tab');
    await page.getByPlaceholder('Wachtwoord').fill('SterkWachtwoord@2');
    await page.getByLabel('Login Knop').click();
    await page.getByRole('heading', { name: 'Gebruiker Gegevens' }).click();
    await page.getByRole('link', { name: 'Chat' }).click();
    // await page.getByText('System - 1/19/2024, 3:02:29 PM Deze chatgroep heeft nog geen berichten!').click();
    await page.getByLabel('Huidige verbonden gesprek').click();
    await page.getByPlaceholder('Typ een bericht...').click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('button', { name: 'Testgesprek 15/1/' }).click();
    await page.getByPlaceholder('Typ een bericht...').click();
    await page.getByPlaceholder('Typ een bericht...').fill('Playwright Testbericht');
    await page.getByRole('button', { name: 'Submit' }).click();
    // await page.getByText('user@example.com - 1/19/2024, 3:03:26 PM Playwright Testbericht').click();
    await page.getByText('user@example.com - 1/19/2024').click();
    await page.getByText('Playwright Testbericht').click();
    await page.locator('div').filter({ hasText: 'Gespreklijst Nieuw gesprek' }).nth(2).click();
    await page.getByRole('button', { name: 'nieuwfillertest' }).click();
    // await page.getByText('System - 1/19/2024, 3:03:48 PM Deze chatgroep heeft nog geen berichten!').click();
});