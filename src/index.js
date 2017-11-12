import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// style things
import './global-styles'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
