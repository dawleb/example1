import { test, expect } from '@playwright/test';

test('should successfully log in', async ({ page }) => {
  // Navigate to the page.
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  
  // Provide user credentials.
  await page.fill('#username', "student")
  await page.fill('#password', "Password123");

  // Click the login button.
  await page.click('#submit');

  // Expect a title to contain a substring.
  await expect(page).toHaveTitle(/Logged In Successfully/);
});
