const httpFunction = require('./index');
const context = require('../test/defaultContext')

test('Http trigger should return a number', async () => {

    await httpFunction(context);

    expect(context.counter).toBeGreaterThan(0);
});
