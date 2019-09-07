#!/usr/bin/env node

function shuffle(array, excludeList = '') {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const getTeam = (team, excluded = '') => {
  if (process.env.TEAM) {
    return process.env.TEAM.split(',').filter(p => !excluded.includes(p));
  }

  return team;
};

const formatPerson = (p, slackStyle) => {
  return slackStyle ? `@${p}` : p;
};

const output = (slackStyle, excludeList) => {
  const team = [];

  const shuffled = shuffle(getTeam(team, excludeList));
  const first = shuffled.slice(0, shuffled.length / 2);
  const last = shuffled.slice(first.length, shuffled.length);

  const paired = first.reduce((accum, member, i) => {
    accum.push([member, last.pop()]);
    return accum;
  }, []);

  if (last.length > 0) {
    // we have an extra
    paired[Math.floor(Math.random() * paired.length)].push(last.pop());
  }

  return `
Pairing Partners for the week :party: :pairing:
-----------------------------------------------
${paired
  .map(p => {
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
  shuffle,
  output
};
