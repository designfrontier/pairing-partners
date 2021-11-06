# pairing-partners

This is a simple tool for creating random pairing assignments for a team of
software engineers. It reads from env vars to get the team it is using as a
seed. See future work for some expansion that would be nice...

For now it outputs a nice-ish formatted message with the names in it.

## Setup

1. install with `npm i -g pairing-partners`
2. add a comma-delimited list of your team's slackhandles/names to your
   env vars. It must be named `TEAM`.
   `export TEAM="luke,han,leia,chewy,darth vader,r2d2"`. The easiest thing to do
   is to put this in your .bashrc/.zshrc or some other file that is sourced into
   your terminal's environment.
3. that's it!

## Usage

```
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

--minimumSize, -m
  Tell it how many people you want as the minimum size for pairing groups.
  `-ms 3` means no group will be smaller than 3.

--frequency, -f
  Provide an alternate string for the message at the top of the pairing
  groups
  Pairing Partners for the {frequency} :party: :pairing:
```

# Futures plans

1. add contributor docs
2. add the ability to publish straight to slack with something like `slack-pipe`
3. add unit tests
4. add a config file instead of env vars as an option for storing config
5. Other things?
