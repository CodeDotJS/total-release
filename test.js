import test from 'ava';
import fn from './';

test(async t => {
	const latestVersion = await fn('instavim');

	t.is(latestVersion, '4');
});
