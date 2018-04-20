const stringsFunctions = require('./string')

describe('Strings Tests:', () => {

    test("Greetings Pah!", () => {
        expect(stringsFunctions.helloString('Pah')).toEqual('Hello Pah.');
    });

    test.skip("Lowercase strings are equals?", () => {
        expect(stringsFunctions.equalStrings('hello', 'hello')).toEqual(true);
    });

    test.skip("Case sensitive is on?", () => {
        expect(stringsFunctions.equalStrings('hello', 'HELLO')).toEqual(true);
    });

    test.skip("What about a real string?", () => {
        expect(stringsFunctions.equalStrings('JavaScript is awesome', 'javascript is AWESOME')).toEqual(true);
    });

    test.skip("Counting words it is easier than counting stars!", () => {
        expect(stringsFunctions.countingWords('With great power, comes great responsibility.').toBe(6));
    });

    test.skip("I\'m pro hacker!", () => {
        expect(stringsFunctions.amazingHacker("Nory was a Catholic because her mother was a Catholic, and Nory\’s mother was a Catholic because her father was a Catholic, and her father was a Catholic because his mother was a Catholic, or had been.", 'Catholic', 'Hacker').toEqual("Nory was a Hacker because her mother was a Hacker, and Nory\’s mother was a Hacker because her father was a Hacker, and her father was a Hacker because his mother was a Hacker, or had been."));
    });

})
