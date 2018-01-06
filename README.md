# Functional programming project Euler

[![Build Status](https://travis-ci.org/Xide/fp-project-euler.svg?branch=master)](https://travis-ci.org/Xide/fp-project-euler)

This repository contains answers to project euler exercices
coded in Javascript with the Ramda functional programming library.

---

# Currently solved

| Exercice                               | Source                       |
| -------------------------------------- | ---------------------------- |
| Problem 1 - Multiples of 3 and 5       | [src/ex01.js](./src/ex01.js) |
| Problem 2 - Even Fibonacci numbers     | [src/ex02.js](./src/ex02.js) |
| Problem 3 - Largest prime factors      | [src/ex03.js](./src/ex03.js) |
| Problem 4 - Largest palindroms product | [src/ex04.js](./src/ex04.js) |
| Problem 5 - Smallest multiple          | [src/ex05.js](./src/ex05.js) |
| Problem 6 - Sum square difference      | [src/ex06.js](./src/ex06.js) |

---

# Install

```bash
git clone https://github.com/Xide/fp-project-euler.git
cd fp-project-euler

# You will need npm5 to benefit from the package-lock.json lockfile
npm install
```

---

# Test

```bash
# Run only unit test
npm run test:unit

# Run only answers validation
npm run test:validation

# Run the full test suite
# alias: npm run test:all
npm test

```
