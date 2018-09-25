const reverseString = require('./reverseString');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('String reveres', () => {
    expect(reverseString('hello')).toEqual('olleh');
})