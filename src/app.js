import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter-comp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const hello = 'hello';
const jsxHandle = (
   <div id="app">
      <Counter />
   </div>
);

ReactDOM.render(jsxHandle, document.getElementById('app'));
