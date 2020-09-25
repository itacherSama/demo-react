import React from 'react';
import ReactDOM from 'react-dom';
import App from './StartPointApp';

it('rendr w crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
