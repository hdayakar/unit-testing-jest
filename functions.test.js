const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2,2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toBe matcher is used to check primitive types like string, numbers, null, undefined and boolean
// we need to use toEqual to check reference types like object, arrays and function

test('User should be Dayakar object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Dayakar',
        lastName: 'arumbaka'
    });
});