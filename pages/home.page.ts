import type { Page } from 'playwright'; 

export class HomePage { 
    readonly page: Page; 

    constructor(page: Page) { 
        this.page = page; 
    } 

    async open() { 
        await this.page.goto("https://practicetestautomation.com/practice-test-login/");
    }
}
