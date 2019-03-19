import { NumberArray } from './index';
import { arraysMatch } from '@writetome51/arrays-match';
import { inRange } from '@writetome51/in-range';


let numbers = new NumberArray([0]);

if (numbers.className && numbers.className === 'NumberArray') console.log('test 1 passed');
else console.log('test 1 FAILED');

if (numbers.matches([0])) console.log('test 2 passed');
else console.log('test 2 FAILED');

if (numbers.length === 1) console.log('test 3 passed');
else console.log('test 3 FAILED');

if (numbers.min === 0 && numbers.max === 0) console.log('test 4 passed');
else console.log('test 4 FAILED');

if (numbers.difference === 0) console.log('test 5 passed');
else console.log('test 5 FAILED');

if (numbers.sum === 0) console.log('test 6 passed');
else console.log('test 6 FAILED');

if (numbers.average === 0) console.log('test 7 passed');
else console.log('test 7 FAILED');

if (numbers.product === 0) console.log('test 8 passed');
else console.log('test 8 FAILED');

if (numbers.median === 0) console.log('test 9 passed');
else console.log('test 9 FAILED');

if (numbers.areOrdered) console.log('test 10 passed');
else console.log('test 10 FAILED');

if (numbers.allInRange([0, 0])) console.log('test 11 passed');
else console.log('test 11 FAILED');


numbers.order();
if (numbers.matches([0])) console.log('test 12 passed');
else console.log('test 12 FAILED');


numbers.shuffle();
if (numbers.matches([0])) console.log('test 13 passed');
else console.log('test 13 FAILED');


if (numbers.notEmpty) console.log('test 14 passed');
else console.log('test 14 FAILED');


numbers.data = [];
let errorTriggered = false;
try {
	numbers.sum;
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 15 passed');
else console.log('test 15 FAILED');


errorTriggered = false;
try {
	numbers.median;
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 16 passed');
else console.log('test 16 FAILED');


numbers.data = [1, '2'];
errorTriggered = false;
try {
	numbers.median;
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 16A passed');
else console.log('test 16A FAILED');


numbers.set([20, -3.005, 4, 7, 31, 59]);

if (numbers.length === 6) console.log('test 16B passed');
else console.log('test 16B FAILED');

if (numbers.min === -3.005 && numbers.max === 59) console.log('test 17 passed');
else console.log('test 17 FAILED');

if (numbers.difference === 62.005) console.log('test 18 passed');
else console.log('test 18 FAILED');

if (numbers.sum === 117.995) console.log('test 19 passed');
else console.log('test 19 FAILED');

if (inRange([19.665833333333, 19.665833333334], numbers.average)) console.log('test 20 passed');
else console.log('test 20 FAILED');


if (numbers.product === -3077841.1999999993) console.log('test 21 passed');
else console.log('test 21 FAILED');

if (numbers.median === 13.5) console.log('test 22 passed');
else console.log('test 22 FAILED');

if (!(numbers.areOrdered)) console.log('test 23 passed');
else console.log('test 23 FAILED');

if (!(numbers.allInRange([-3.004, 59]))) console.log('test 24 passed');
else console.log('test 24 FAILED');


numbers.order();
if (numbers.matches([-3.005, 4, 7, 20, 31, 59])) console.log('test 25 passed');
else console.log('test 25 FAILED');


numbers.shuffle();
if (numbers.hasAll([-3.005, 4, 7, 20, 31, 59])) console.log('test 26 passed');
else console.log('test 26 FAILED');


numbers.data = [7, 59, -3.005, 20, 31, 4];

// test an inherited method:
numbers.prepend([20000]);
if (numbers.data[0] === 20000) console.log('test 27 passed');
else console.log('test 27 FAILED');


if (numbers.asString() === '20000, 7, 59, -3.005, 20, 31, 4') console.log('test 28 passed');
else console.log('test 28 FAILED');
