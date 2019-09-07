const { getTeam } = require('./index.js');

describe('#getTeam', () => {
  test('gets the value from the env vars', () => {
    const oldTeam = process.env.TEAM;
    process.env.TEAM = 'luke,han,yoda,chewie,lando';

    expect(getTeam()).toEqual(
      expect.arrayContaining(['lando', 'han', 'luke', 'chewie', 'yoda'])
    );

    process.env.TEAM = oldTeam;
  });

  test('exclude excludes people from the returned array', () => {
    const oldTeam = process.env.TEAM;
    process.env.TEAM = 'luke,han,yoda,chewie,lando';

    expect(getTeam([], 'lando')).toEqual(
      expect.arrayContaining(['han', 'luke', 'chewie', 'yoda'])
    );

    expect(getTeam([], 'lando')).toEqual(expect.not.arrayContaining(['lando']));

    process.env.TEAM = oldTeam;
  });
});
