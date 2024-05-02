import { isItCorrect } from '../utils/getLocation'
import { expect, test } from 'vitest'


const ranges = {'latitude': [-90, 90], 'longitude': [-180, 180]};

test('32 should be true for latitude', () => {
  expect(isItCorrect('32', ranges['latitude'][0], ranges['latitude'][1])).toBe(true);
})

test('-202 should be false for latitude', () => {
  expect(isItCorrect('-202', ranges['latitude'][0], ranges['latitude'][1])).toBe(false);
})

test('400 should be false for longitude', () => {
  expect(isItCorrect('400', ranges['longitude'][0], ranges['longitude'][1])).toBe(false);
})

test('not a number should be false for longitude', () => {
  expect(isItCorrect('asdfsdf', ranges['longitude'][0], ranges['longitude'][1])).toBe(false);
})
