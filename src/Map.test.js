import { add, choice, size, subtract } from "./Map";

it("can add", () => {
  let left = { foo: 1 };
  let right = { foo: 2 };
  let result = add(left, right);

  expect(result.foo).toBe(3);
});

it("can subtract", () => {
  let left = { foo: 2 };
  let right = { foo: 1 };
  let result = subtract(left, right);
  
  expect(result.foo).toBe(1);  
});

it("can size", () => {
  let map = { a: 1, b: 2 };
  expect(size(map)).toBe(3);
});

it("can choice", () => {
  let map = { a: 1, b: 1, c: 1, d: 1000000000, e: 1, f: 1 };
  let result = choice(map);
  // TODO: expect
});