import React, { Component } from 'react';
import './App.css';
import './css/hamburger-menu.css';
import { categoryGames } from './ListGames/ListGames';
import GithubPreview from './GithubPreview/GithubPreview';


const ListPages = (categories => categories.map((page) =>
    <ul key={"ul" + page.id}>
    <li key={page.id}><a href={'/#' + page.name}>{page.name}</a></li>
    </ul>
));

const ListHamburger = (categories => categories.map((page) =>
    <li key={page.id}><a href={'/#' + page.name}>{page.name}</a></li>
));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}

            <div className="listPages content-center">
                {ListPages(categoryGames)}
            </div>
            <div className="hamburger">

                <input type="checkbox"/>
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu" className="bg-hamburger">
                    {ListHamburger(categoryGames)}
                </ul>
            </div>
        </header>
      </div>
    );
  }
}

export default App;
