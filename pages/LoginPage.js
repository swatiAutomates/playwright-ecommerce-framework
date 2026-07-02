import * as allure from 'allure-js-commons';

export class LoginPage {

    constructor(page) {
        this.page = page;
        // Locators
        this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
        this.loginPageText = page.getByText('Login to your account');
        this.loginEmail = page.locator('[data-qa="login-email"]');
        this.loginPassword = page.locator('[data-qa="login-password"]');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.loggedInAs = page.getByText('Logged in as');
    }

    // Navigate to application
    async openWebsite() {
        await allure.step('Navigate to Website', async () => {
            await this.page.goto('https://automationexercise.com');
        });
    }

    // Open Login Page
    async openLoginPage() {
        await allure.step('Click on Login / Signup', async () => {
            await this.loginLink.click();
        });
    }

    // Enter Username
    async enterUsername(username) {
        await allure.step('Fill Username', async () => {
            await this.loginEmail.fill(username);
        });
    }

    // Enter Password
    async enterPassword(password) {
        await allure.step('Fill Password', async () => {
            await this.loginPassword.fill(password);
        });
    }

    // Click Login Button
    async clickLogin() {
        await allure.step('Click on Login Button', async () => {
            await this.loginButton.click();
        });
    }

    // Complete Login Flow
    async login(username, password) {
        await allure.step('Login with Valid Credentials', async () => {
            await this.enterUsername(username);
            await this.enterPassword(password);
            await this.clickLogin();
        });
    }
}