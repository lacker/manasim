import React, { Component } from "react";
import "./App.css";

const MONO_BLUE = {
  "opt": 4,
  "land": 20,
  "blank": 36,
};

function add(left, right) {
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
function subtract(left, right) {
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
      throw new Error("key " + key " is in right but not in left"); 
    }
  }
  
  return answer;
}

// Adds up all values
function size(map) {
  let answer = 0;
  for (let value of map) {
    answer += value; 
  }
  return answer;
}

// Chooses something randomly from a map of item -> count
function choice(map) {
  let s = size(map);
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
function randomPop(map) {
  let item = choice(map);
  let subtrahend = {};
  subtrahend[item] = 1;
  let newMap = subtract(map, subtrahend);
  return [newMap, item];
}

export default function app() {
  return (
    <div className="App">
        <p>Hello mana simulation world.</p>
    </div>
  );
}
