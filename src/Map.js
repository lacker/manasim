// Tools for item -> count maps

export function add(left, right) {
  let answer = {};
  for (let key in left) {
    answer[key] = left[key];
  }
  for (let key in right) {
    answer[key] = (answer[key] || 0) + right[key];
  }
  return answer;
}

// Left and right are maps from thing -> count
// Zeros are removed
export function subtract(left, right) {
  let answer = {};
  for (let key in left) {
    let r = right[key] || 0;
    let a = left[key] - r;
    if (a < 0) {
      throw new Error("sets should not have negative things");
    }
    if (a > 0) {
      answer[key] = a;
    }
  }

  // check no keys in right are missing entirely from left
  for (let key in right) {
    if (!answer[key]) {
      throw new Error("key " + key + " is in right but not in left");
    }
  }

  return answer;
}

// Adds up all values
export function size(map) {
  let answer = 0;
  for (let value of map) {
    answer += value;
  }
  return answer;
}

// Chooses something randomly from a map of item -> count
export function choice(map) {
  let s = size(map);
  if (s === 0) {
    throw new Error("cannot choice from empty map");
  }
  let index = Math.floor(Math.random() * s);
  for (let item in map) {
    index -= map[item];
    if (index < 0) {
      return item;
    }
  }
  throw new Error("bug in choice");
}

// Returns newMap, item pair
export function randomPop(map) {
  let item = choice(map);
  let subtrahend = {};
  subtrahend[item] = 1;
  let newMap = subtract(map, subtrahend);
  return [newMap, item];
}

// Draws until f(items) is true
// Returns newMap, items pair
export function drawUntil(deck, f) {
  let [map, items] = [deck, []];
  while (!f(items)) {
    let [map, item] = randomPop(deck);
    items.push(item);
  }
  return [map, items];
}

export function randomDraw(map, num) {
  let answer = [];
  // TODO
}
