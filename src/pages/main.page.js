import { test } from '@playwright/test';
const URL = 'https://realworld.qa.guru/';

export class MainPage {
constructor (page) {    
// техническое описание страницы браузером
// описываем браузер
    this.page = page;
    this.signupLink = page.getByRole('link', { name: 'Sign up' }).describe('Кнопка регистрации');;
}

// методы бизнесовое описание страницы
    async open() {
         await test.step('Открыть главную страницу', async () => {
         await this.page.goto(URL);
         });
    }

     async signup() {
           await test.step('Перейти на страницу регистрации', async () => {
             await this.signupLink.click();
           });
    }
}