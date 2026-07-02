import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

//Opens Automation Exercise.
//Clicks the Signup / Login link using getByRole().
//Verifies that the Login page opens.
test('Open Automation Exercise and verify Login page', async ({ page }) => {

  await page.goto('https://automationexercise.com/');
  const login = await page.getByRole('link',{name:'Signup / Login'});
  await login.click();
  await expect(page).toHaveURL('https://automationexercise.com/login');
  await expect(page.getByText('Login to your account')).toBeVisible();
});