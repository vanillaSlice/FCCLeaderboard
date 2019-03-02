import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

import './index.scss';

ReactDOM.render(React.createElement(App), document.getElementById('root'));

registerServiceWorker();
