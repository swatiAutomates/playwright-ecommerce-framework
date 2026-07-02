import {test,expect} from '@playwright/test';

/*
Acceptance Criteria:
Open the website.
Click Signup / Login.
Enter valid email.
Enter valid password.
Click Login.
Verify the user is logged in.
Your task is to automate this flow. */

test('Verify Login successfully', async ({page}) => {
    await page.goto('https://automationexercise.com');
    const loginLink = page.getByRole('link',{name :'Signup / Login'});
    await loginLink.click();
    await expect(page.getByText('Login to your account')).toBeVisible();
    //data-qa="login-email"
    await page.locator('[data-qa="login-email"]').fill('sd@mailinator.com');
    await page.locator('[data-qa="login-password"]').fill('12345');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByText('Logged in as')).toBeVisible();
});