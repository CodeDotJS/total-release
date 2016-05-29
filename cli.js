'use strict';

const totalRelease = require('./index.js');

totalRelease('instavim').then(count => {
	console.log(count);
});
