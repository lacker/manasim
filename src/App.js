import React, { Component } from "react";
import "./App.css";

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
    answer[key] = a;
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

export default function app() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello mana simulation world.</p>
        <a
          className="App-link"
          href="https://github.com/lacker/manasim"
          target="_blank"
          rel="noopener noreferrer"
        >
          more information
        </a>
      </header>
    </div>
  );
}
