import { type Locator, type Page } from '@playwright/test';

/**
 * Page Object Model for the Login Page.
 */
export class HomePage {
    readonly sortDropdown: Locator;
    readonly searchInput: Locator;
    readonly searchButton: Locator;
    readonly categoryCheckBox: (categoryName: string) => Locator;
    readonly itemName: (itemName: string) => Locator;

    constructor(page: Page) {
        this.sortDropdown = page.getByTestId('sort');
        this.searchInput = page.getByTestId('search-query');
        this.searchButton = page.getByTestId('search-submit');
        this.categoryCheckBox = (categoryName: string) => page.getByLabel(categoryName);
        this.itemName = (itemName: string) => page.getByTestId('product-name').filter({ hasText: itemName });
    }

    /**
     * Checks the category checkbox based on the provided name.
     * @param name to check 
     */
    async checkCategory(name: string) {
        await this.categoryCheckBox(name).click();
    }

    /**
     * Searches for an item using the provided name.
     * @param itemName to search.
     */
    async searchForItem(itemName: string) {
        await this.searchInput.fill(itemName);
        await this.searchButton.click();
    }

    /**
     * Sorts the items based on the provided option.
     * @param option to select.
     */
    async sortBy(option: string) {
        await this.sortDropdown.selectOption(option);
    }

    /**
     * Clicks on an item based on the provided name.
     * @param itemName to open the item.
     */
    async clickOnItem(itemName: string) { 
        await this.itemName(itemName).click();
    }
}