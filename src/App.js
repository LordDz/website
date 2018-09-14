import React, { Component } from 'react';
import './App.css';
import { categoryGames } from './ListGames/ListGames'
// import logo from './logo.svg';

const ListPages = (categories => categories.map((page) =>
    <li key={page.id}><a href={'/#' + page.name}>{page.name}</a></li>
));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}
            <div className="content-center">
                <ul>{ListPages(categoryGames)}</ul>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
