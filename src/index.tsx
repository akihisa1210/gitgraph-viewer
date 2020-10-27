import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // In React.StrictMode the diagram of @gitgraph/react is broken.
  // See https://github.com/nicoespeon/gitgraph.js/issues/351#issuecomment-632127276 .
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
