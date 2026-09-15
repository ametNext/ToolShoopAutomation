import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly emailAddressInput: Locator;
    readonly passwordInput: Locator
    readonly loginButton: Locator;
    readonly registerYourAccountLink: Locator;
    readonly forgotYourPasswordLink: Locator;

    constructor(page: Page) {
        this.emailAddressInput = page.getByTestId('email');
        this.passwordInput = page.getByTestId('password');
        this.loginButton = page.getByTestId("login-submit");
        this.registerYourAccountLink = page.getByTestId("register-link");
        this.forgotYourPasswordLink = page.getByTestId('forgot-password-link');
    }

    async login(email: string, password: string) {
        await this.emailAddressInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}