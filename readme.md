# pairing-partners

This is a simple tool for creating random pairing assignments for a team of
software engineers. It reads from env vars to get the team it is using as a
seed. See future work for some expansion that would be nice...

For now it outputs a nice-ish formatted message with the names in it.

## Setup

1. install with `npm i -g pairing-partners`
2. add a comma-delimited list of your team's slackhandles/names to your
   env vars. It must be named `TEAM`
   `export TEAM="luke,han,leia,chewy,darth vader,r2d2"`
3. that's it!

## Usage

`pairing-partners`

or

`TEAM="r2d2,c3p0,wedge" pairing-partners`

which allows you to set the team inline.

If you don't want it to output slack (with an @ prefix on names) then you can
pass it the `--no-slack` argument.
