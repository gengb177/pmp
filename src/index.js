import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PmpRouter from './Page/Router';


ReactDOM.render(<PmpRouter ></PmpRouter>,document.getElementById('root'));

serviceWorker.unregister();
