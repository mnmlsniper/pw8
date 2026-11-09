import { test, expect } from '../src/fixtures.js';
  let token;

test.describe('Challenge', () => {
    test.beforeAll(async ({ api }) => {
        token = await api.challenger.post();
            
    console.log(`https://apichallenges.com/gui/challenges/${token}`);
    });


 test('GET /api/challenges 200 @api', async ({ api }) => {

    // ТЕСТ - api фикстура - отдает фасад сервиса, который инкапсулирует все api методы,
  //  console.log(token);
    let {body} = await api.challenges.get(token);

     expect(body.challenges.length).toEqual(99);
});

 test('POST /api/todos 201 @api Авторизованный пользователь может создать туду', async ({ api }) => {
//todo унести в билдер
    const data = {
        "title": "A title", // faker
        "doneStatus": false,
        "description": "my description"
    };
    let {body} = await api.todos.post(token, data);
    //todo проверять все поля, а не только title
 expect(body.title).toEqual('A title');

});

});

