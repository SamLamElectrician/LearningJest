const reverseString = require('./reversestring');
//test is function exist
test('reverse string function exist', () => {
	expect(reverseString).toBeDefined();
});

test('String reverses', () => {
	expect(reverseString('hello')).toEqual('olleh');
});

test('string with uppercase', () => {
	expect(reverseString('Hello')).toEqual('olleh');
});
