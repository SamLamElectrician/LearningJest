//npm init-y  --> create default package.json, -y default
//npm i -D jest -->  -D dependecies and installs jest
//change package.json script/test to jest and save

const axios = require('axios');

//name.test.js makes a test  file for jest

//https://jsonplaceholder.typicode.com/ -->fake api

const functions = {
	add: (num1, num2) => num1 + num2,
	isNull: () => null,
	checkValue: (x) => x,
	createUser: () => {
		const user = { firstName: 'Brad' };
		user['lastName'] = 'Traversy';
		return user;
	},
	fetchUser: () =>
		axios
			.get('https://jsonplaceholder.typicode.com/users/1')
			//axios automatically parses the response
			.then((res) => res.data)
			//catch error codes
			.catch((err) => 'error'),
};

//exports functions
module.exports = functions;
