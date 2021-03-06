import { expect } from "chai";

import ex01 from "./ex01";
import ex02 from "./ex02";
import ex03 from "./ex03";
import ex04 from "./ex04";
import ex05 from "./ex05";
import ex06 from "./ex06";

describe("Problem 1 - Multiples of 3 and 5", () => {
  it("Should yield the correct result", () => {
    expect(ex01.sumOfMultiplesUntil(1000)).to.equals(233168);
  });
});


describe("Problem 2 - Even Fibonacci numbers", () => {
  it("Should yield the correct result", () => {
    expect(ex02.evenFibonacciNumbersUntil(4000000)).to.equals(4613732);
  });
});

describe("Problem 3 - Largest prime factors", () => {
  it("Should yield the correct result", () => {
    expect(ex03.solve()).to.equals(6857);
  });
});

describe("Problem 4 - Largest palindroms product", () => {
  it("Should yield the correct result", () => {
    expect(ex04.solve()).to.equals(906609);
  });
});

describe("Problem 5 - Smallest multiple", () => {
  it("Should yield the correct result", () => {
    expect(ex05.solve()).to.equals(232792560);
  });
});

describe("Problem 6 - Sum square difference", () => {
  it("Should yield the correct result", () => {
    expect(ex06.solve()).to.equals(25164150);
  });
});
