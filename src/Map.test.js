import { add, choice, randomPop, size, subtract } from "./Map";

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
  expect(result).toBe("d");
});

it(“can randomPop”, () => {
  let map = { a: 1, b: 1, c: 1, d: 1};
  map.randomPop();
  expect(size(map)).toBe(3);
  map.randomPop();
  expect(size(map)).toBe(2);
  map.randomPop();
  expect(size(map)).toBe(1);
  map.randomPop();
  expect(size(map)).toBe(0);
  expect(() => map.randomPop()).toThrow();
});

it("can randomDraw", () => {

});
