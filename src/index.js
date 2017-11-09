import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Recipe from './Recipe.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Recipe />, document.getElementById('root'));
registerServiceWorker();
