import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));

class OldSync {
   constructor() {
      this.name = 'joe';
   }
}
const joe = new OldSync();
console.log(joe);

class UpSync {
   name = 'tom';
}

const tom = new UpSync();
console.log(tom);
