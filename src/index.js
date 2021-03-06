import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(<App features={store} />, document.getElementById('root'));