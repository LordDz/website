import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/grid.css';
import './css/font.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ListGames from "./ListGames/ListGames";
import About from './About/About'


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<ListGames />, document.getElementById('listGames'));
registerServiceWorker();
