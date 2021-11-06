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

const createPairs = (team, count = 2) => {
  const shuffled = shuffle(team);
  const first = shuffled.slice(0, Math.floor(shuffled.length / count));
  const last = shuffled.slice(first.length, shuffled.length);

  const paired = first.reduce((accum, member, i) => {
    const group = Array(count - 1).fill(false);
    group.unshift(member);

    accum.push(
      group.map((m) => {
        return m || last.pop();
      })
    );

    return accum;
  }, []);

  if (last.length > 0) {
    last.forEach((name) => {
      paired[Math.floor(Math.random() * paired.length)].push(name);
    });
  }

  return paired;
};

module.exports = {
  shuffle,
  createPairs,
};
