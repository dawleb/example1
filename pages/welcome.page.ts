import type { Page } from 'playwright';
import { expect } from "@playwright/test";

export class WelcomePage {
    readonly page: Page;
    
    constructor(page: Page) { 
        this.page = page; 
    } 

    async isOpened(text: string) {
        const element = this.page.locator('#loop-container h1');

        await expect(element).toHaveText(text);
    }
}

