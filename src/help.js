const help = `
pairing-partners!

Welcome to pairing-partners! The easy way to generat pairing assignments
for a team of people.

Usage:
  pairing-partners [--no-slack, -ns] [--help, -h] [--exclude, -e <list-here>]
  pps [--no-slack, -ns] [--help, -h] [--exclude, -e <list-here>]

--no-slack, -ns
  This disables the @ sign prefix. By default it adds this to make it easy to
  post the pairing into slack to let people know. But if you don't need that
  then use this argument to turn that off.

--help, -h
  Outputs this helpful help file.

--team, -t
  Outputs the team list and not the pairing assignments.

--exclude, -e
  Takes a commadelimited list of team members to exclude from the pairings.
  For example --exclude lando,luke
  Would exclude Lando and Luke from pairing generation.
`;

module.exports = {
  help
};
