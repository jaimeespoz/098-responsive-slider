console.log('Aca')
const { add } = require('../src/pp');

describe('test index', () => {
    test('add', () => {
        expect(add(1, 2)).toBe(3);
    });
});
