import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/grid.css';
import './css/font.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ListGames from "./ListGames/ListGames";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ListGames />, document.getElementById('listGames'));
registerServiceWorker();
