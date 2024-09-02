# Wyrazówka

The Wyrazowka is an internet application project designed to quickly search for words in a language dictionary based on specified letters and their positions in a word. Useful for crossword enthusiasts, creative writers, and anyone seeking words that fit a particular construction.

[Project site](https://wyrazowka.zbrogd.pl/)

The project was created for the purpose of learning web technologies.

Polish dictionary: [SJP](https://sjp.pl/)

## Technologies

* Angular 16
* RxJS 7

## To do

- Support for various dictionaries
- Different search methods(without considering the order of letters, with letter repetition)

## Requirements

Node.js is required for the development environment, with a minimum supported version of 18.10.0. This version is necessary due to Angular requirements.

Running [wyrazowka-server](https://github.com/mofcpl/wyrazowka-server-node) is required for this project to work.

## Installation

### Clone this repository
```bash
git clone https://github.com/mofcpl/aircheck-client.git
```

### Install dependencies
```bash
npm install
```

### Run development server
```bash
ng serve
```

## Contributing

1. Clone the repository and make a new branch from develop.
2. Make changes.
3. Open a Pull Request with a comprehensive description of changes.

This project uses Git Flow branching model for development.

## Notes

Wyrazowka is a continuation of the earlier project, [Wyrazówka](https://github.com/mofcpl/wyrazowka), which was developed in a different technology stack.
