#!/usr/bin/env node

const { createPairs } = require('./pairer');

const getTeam = (team, excluded = '') => {
  if (process.env.TEAM) {
    return process.env.TEAM.split(',').filter((p) => !excluded.includes(p));
  }

  return team;
};

const formatPerson = (p, slackStyle) => {
  return slackStyle ? `@${p}` : p;
};

const output = (slackStyle, excludeList, minimumSize, frequency) => {
  const team = getTeam([], excludeList);

  const paired = createPairs(team, minimumSize);

  return `
Pairing Partners for the ${frequency} :party: :pairing:
-----------------------------------------------
${paired
  .map((p) => {
    const firstPerson = p.pop();
    return p.reduce(
      (s, person) => (s += ` and ${formatPerson(person, slackStyle)}`),
      `${formatPerson(firstPerson, slackStyle)}`
    );
  })
  .join('\n')}
-----------------------------------------------
See y'all at the pairing party!`;
};

module.exports = {
  getTeam,
  output,
};
