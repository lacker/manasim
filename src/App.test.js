import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('can add', () => {
  let left = {"foo": 1};
  let right = {"foo": 2};
  // TODO: fix exporty things
});
