# total-release

> Find the total releases of a node package available on npm

[![Build Status](https://travis-ci.org/CodeDotJS/total-release.svg?branch=master)](https://travis-ci.org/CodeDotJS/total-release)

## Install

```
$ npm install --save total-release
```

## Usage

__CASE : 1__
```js
'use strict';

const totalRelease = require('total-release');

totalRelease('instavim').then(releaseCount => {
	console.log(releaseCount);
	// => 4
});
```

__CASE : 2__
```js
'use strict';

const totalRelease = require('total-release');

totalRelease('curver').then(releaseCount => {
	console.log(releaseCount);
	// => 1.0.0 is the latest release
});
```

## Related

- [total-release-cli](https://github.com/CodeDotJS/total-release-cli) : CLI Tool for this API.

- [packstat](https://github.com/CodeDotJS/packstat) : Displays metrics about npm modules.

- [packages-by](https://github.com/CodeDotJS/packages-by) : Total packages published by a npm user.

- [curver](https://github.com/CodeDotJS/curver) : Easily fetch the latest version of node module available on npm.

- [whatiz](https://github.com/CodeDotJS/whatiz) : Display one-line manual node package descriptions available on npmjs.

## License

MIT &copy; [Rishi Giri](http://rishigiri.com)

