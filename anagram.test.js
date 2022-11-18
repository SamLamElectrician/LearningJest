const isAnagram = require('./anagram');

//test type of passing
test('isAnagram function exists', () => {
	expect(typeof isAnagram).toEqual('function');
});

test('"cinema" is an anagram of "iceman"', () => {
	expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

//only cares of letters, not case sensitive or special chars
test('"Dormitory" is an anagram of "dirty room##"', () => {
	expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
	expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
