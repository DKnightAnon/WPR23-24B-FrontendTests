import { test, expect } from '@playwright/test';

test('ErvaringsdeskundigeRegistratie', async ( {page}) => {

    await page.goto('https://wpr23-24b.azurewebsites.net/');
await page.getByRole('link', { name: 'Inloggen' }).click();
await page.getByLabel('Registreer u hier').click();
await page.getByText('Registreer jezelf als').click();
await page.locator('label').filter({ hasText: 'Nee' }).getByRole('radio').check();
await page.getByPlaceholder('Vul hier je volledige naam in').click();
await page.getByPlaceholder('Vul hier je volledige naam in').fill('TestGebruiker1');
await page.getByPlaceholder('Vul hier je volledige naam in').press('Tab');
await page.getByPlaceholder('Vul hier je email-adres in').fill('testgebruiker1@example.com');
await page.getByPlaceholder('Vul hier je email-adres in').press('Tab');
await page.getByPlaceholder('Vul hier je wachtwoord in').fill('Testgebruiker');
await page.getByPlaceholder('Vul hier je wachtwoord in').press('Control+a');
await page.getByPlaceholder('Vul hier je wachtwoord in').fill('Testgebruiker1/');
await page.getByPlaceholder('Vul hier je wachtwoord in').press('Tab');
await page.getByPlaceholder('Vul hier je wachtwoord opnieuw in').fill('Testgebruiker1/');
await page.getByPlaceholder('Vul hier je wachtwoord opnieuw in').press('Tab');
await page.getByPlaceholder('Vul hier je postcode in').fill('2121AB');
await page.getByPlaceholder('Vul hier je postcode in').press('Tab');
await page.getByPlaceholder('Vul hier uw geboortedatum in').click();
await page.getByPlaceholder('Vul hier uw geboortedatum in').fill('2024-01-19');
await page.getByPlaceholder('Vul hier je telefoonnummer in').click();
await page.getByPlaceholder('Vul hier je telefoonnummer in').fill('0612345678');
await page.getByLabel('Volgende pagina').click();
await page.locator('#fysiekeBeperkingCheckbox').check();
await page.locator('#visueleBeperkingCheckbox').check();
await page.locator('#auditieveBeperkingCheckbox').check();
await page.getByLabel('Volgende pagina').click();
await page.getByLabel('Sta commerciële benaderingen').check();
await page.locator('#BenaderingPortal').check();
await page.getByLabel('Sta telefonische benaderingen').check();
await page.getByLabel('Afronden Registratie').click();
});