import { test as setup, expect } from '@playwright/test';
import users from '../test-data/users.json';

const authFile = '.auth/user.json';

setup('authenticate standard user', async ({ page }) => {
  // 1. Navigate to your login route
  await page.goto('/login');

  // 2. Fill credentials from the JSON file
  await page.getByLabel('Email').fill(users.admin.username);
  await page.getByLabel('Password').fill(users.admin.password);
  await page.getByRole('button', { name: 'Sign In' }).click();

  // 3. Ensure login completed by waiting for an authenticated element or URL
  await expect(page).toHaveURL(/.*dashboard/);
  await expect(page.getByTestId('user-avatar')).toBeVisible();

  // 4. Save cookies, session storage, and tokens to JSON
  await page.context().storageState({ path: authFile });
});