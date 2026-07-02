import { test, expect } from '@playwright/test';
import * as allure from 'allure-js-commons';
import { LoginPage } from '../pages/LoginPage';

test('Verify user can login successfully with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openWebsite();

    await loginPage.openLoginPage();

    await allure.step('Verify Login Page is displayed', async () => {
        await expect(loginPage.loginPageText).toBeVisible();
    });

    await loginPage.login('sd@mailinator.com','12345');

    await allure.step('Verify User Logged In Successfully', async () => {
        await expect(loginPage.loggedInAs).toBeVisible();
    });

});