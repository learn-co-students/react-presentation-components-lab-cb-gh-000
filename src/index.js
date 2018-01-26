import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function doSomething(){
  alert("Did Something!");
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={doSomething} />
  </div>,
  document.getElementById('root')
);