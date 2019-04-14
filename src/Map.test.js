import { add, subtract } from "./Map";

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
  throw new Error("TODO: implement me");
});
