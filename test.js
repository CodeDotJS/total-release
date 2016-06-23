import test from 'ava';
import fn from './';

test(async t => {
	const totalRelease = await fn('express');

	t.is(totalRelease.releases, '274');
});

