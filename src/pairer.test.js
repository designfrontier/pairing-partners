const { createPairs } = require('./pairer');

describe('#createPairs', () => {
  const team = [
    'sam',
    'frodo',
    'gollum',
    'gandalf',
    'borimir',
    'faramir',
    'aragorn',
    'gimli',
    'pippin',
    'merry',
  ];

  test('should return the correct minimum length of each team', () => {
    createPairs(team, 2).forEach((r) => {
      expect(r.length).toBeGreaterThanOrEqual(2);
    });
    createPairs(team, 3).forEach((r) => {
      expect(r.length).toBeGreaterThanOrEqual(3);
    });
  });
});
