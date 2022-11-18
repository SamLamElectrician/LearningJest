//npm test --> test units
//"jest --watchALL" changes so it test as you code --> change in the package json

// runs before each test
beforeEach(() => {
	initDatabase();
});
// runs after each tests
afterEach(() => {
	closeDatabase();
});

// runs before the test starts
beforeAll(() => {
	initDatabase();
});
// runs after tests end
afterAll(() => {
	closeDatabase();
});

const nameCheck = () => console.log('Checking Name....');
//describe used to target a certain test
//in this case console logs(checking name ) if  it runs in the describe block
describe('Checking Names', () => {
	beforeEach(() => nameCheck());

	test('User is Jeff', () => {
		const user = 'Jeff';
		expect(user).toBe('Jeff');
	});

	test('User is Karen', () => {
		const user = 'Karen';
		expect(user).toBe('Karen');
	});
});

const initDatabase = () => console.log('database init');
const closeDatabase = () => console.log('database close');

//takes the function module to be tested
const functions = require('./functions');

//string can be anything--> returns in the terminal
//expects is the function
//.toBe is a matcher so it has to be 4 in this case
//tobe --> used to be test for specific primitive value, null, undefined, truthy,falsy ,not objects or array(reference type)
test('Adds 2 + 2 equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});
//not 5
test('Adds 2 + 2 NOT equal 5', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

//How to check for Truthy/Falsy Value
// ToBeNull -->  Matches only Null
// ToBeUndefined --> Matches only undefined
// ToBeDefined --> opposit of toBeUndefined
// ToBeTruthy --> matches if statement is treated true
// ToBeFalsy --> matches if statment is treated false

//tobeNull
test('should be null', () => {
	expect(functions.isNull(null)).toBeNull();
});

//tobeFalsy
test('Should be Falsy', () => {
	expect(functions.checkValue(null)).toBeFalsy();
});

//since toBe is only for primitive types you would have to use toEqual for arrays, objects
test('User should be Brad Traversy object', () => {
	expect(functions.createUser()).toEqual({
		firstName: 'Brad',
		lastName: 'Traversy',
	});
});

//Less than and greater than
//ToBeLessThanOrEqual

test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});

//regex
test('There is no I in team', () => {
	expect('team').not.toMatch('i');
});

//arrays

test('admin should be in usernames', () => {
	usernames = ['john', 'karen', 'admin'];
	expect(usernames).toContain('admin');
});

// Promise
// needs both assertions and return for async data
test('User fetched name should be Leanne Graham', () => {
	//assertions is how many assertions are called eg -->callback or promises
	expect.assertions(1);
	//needs this line so the line so the test doesnt complete before the fetch completes/axios get in this case
	return functions.fetchUser().then((data) => {
		expect(data.name).toEqual('Leanne Graham');
	});
});

//async await syntax
test('User fetched name should be Leanne Graham', async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual('Leanne Graham');
});
