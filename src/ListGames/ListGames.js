import React, { Component } from 'react';
import './css/listGames.css';
import './css/backgrounds.css';
import './css/genre.css';

import ListGameContainer from './ListGameContainer'

import about from './Games/About/About'

import sc2 from './Games/Rts/Sc2'
import pacific from './Games/Rts/Pacific'

import bms1 from './Games/Fps/Bms1'
import bms2 from './Games/Fps/Bms2'

import tortoise from './Games/Jams/Tortoise'
import steve from './Games/Jams/Steve'
import newspaper from './Games/Jams/Newspaper'
import cham from './Games/Jams/Cham'
import party from './Games/Jams/Party'

const categoryAbout = {name: "About", bg: "genre-about", games: [about]};
const categoryRTS = {name: "Real Time Strategy", bg: "genre-rts", games: [sc2, pacific]};
const categoryFPS = {name: "First Person Shooter", bg: "genre-fps", games: [bms1, bms2]};
const categoryJam = {name: "Game Jams", bg: "genre-jam", games: [tortoise, steve, newspaper, cham, party]};

export const categoryGames = [categoryRTS, categoryFPS, categoryJam];

const Genre = ((category) =>
    <div className={"genre " + category.bg}>
        <div><h1 id={category.name}>{category.name}</h1></div>
    </div>
);


class ListGames extends Component {

  render() {
    return (
        <div id="listRTS">
            {/*RTS*/}
            {/*{Genre(categoryAbout)}*/}
            <ListGameContainer type={categoryAbout.games}></ListGameContainer>

            {Genre(categoryRTS)}
            <ListGameContainer type={categoryRTS.games}></ListGameContainer>

            {/*FPS*/}
            {Genre(categoryFPS)}
            <ListGameContainer type={categoryFPS.games}></ListGameContainer>

            {/*Jam*/}
            {Genre(categoryJam)}
            <ListGameContainer type={categoryJam.games}></ListGameContainer>
        </div>
    );
  }
}

export default ListGames;
