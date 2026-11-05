import assert from 'node:assert/strict';
import test from 'node:test';
import { getBrendaAge } from '../lib/brenda.ts';

test('keeps the supplied age until the birthday in São Paulo', () => {
  assert.equal(getBrendaAge(new Date('2026-11-04T21:00:00-03:00')), 26);
  assert.equal(getBrendaAge(new Date('2027-01-01T03:00:00Z')), 26);
  // UTC already says 4 April, but São Paulo is still on 3 April.
  assert.equal(getBrendaAge(new Date('2027-04-04T02:59:59.999Z')), 26);
});

test('adds one year at local midnight on 4 April, every year', () => {
  assert.equal(getBrendaAge(new Date('2027-04-04T03:00:00.000Z')), 27);
  assert.equal(getBrendaAge(new Date('2028-04-04T02:59:59.999Z')), 27);
  assert.equal(getBrendaAge(new Date('2028-04-04T03:00:00.000Z')), 28);
});
