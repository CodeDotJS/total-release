'use strict';

var cheerio = require('cheerio');
var got = require('got');
var Promise = require('pinkie-promise');

function remuseChars(getString) {
	if(getString.indexOf('of') !== -1) {
		return getString.substring(getString.indexOf('of') + 2).replace(' releases', '').trim();
	}
	return getString.split('is')[0].trim() + ' is the latest release';
}

module.exports = function (packageName) {
	if (typeof packageName !== 'string') {
		return Promise.reject(new Error('package name required'));
	}

	var url = 'https://www.npmjs.com/packages/' + packageName;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return remuseChars($('.box li').eq(1).text()) || null;
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Package doesn\'t exist';
		}

		throw err;
	});
};
