import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

type AppFixtures = {
  loginPage: LoginPage;
  authenticatedUser: void;
};

export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  // Auto-authenticates using pre-saved browser state
  // authenticatedUser: [async ({ page }, use) => {
  //   await page.goto('/dashboard');
  //   await use();
  // }, { auto: false }],
});

export { expect } from '@playwright/test';