import React, { Component } from 'react';

const aboutText = {id: "i9", name: "David Zetterdahl", baseGame: "''LordDz''", type: "", url: "email:david_zetterdahl@hotmail.com", videoUrl: "amRoh96Z2to", classNames: "bg-about",
text: "Game developer with a passion for creating games.",
notes: "The site is made from scratch with React."
};

const AboutHTML =

    <div key={aboutText.id} className={"section background-img " + aboutText.classNames}>
        <div id={"id" + aboutText.id} className="whiteframe">

            <h1 className={"content-center"}>{aboutText.name}</h1>
            <h2 className={"content-center"}>{aboutText.baseGame}</h2>
            <h4 className={"content-center"}>{aboutText.type}</h4>
            <p>{aboutText.text}</p>
            <div className="info">Email: <a href="email: david_zetterdahl@hotmail.com">david_zetterdahl@hotmail.com</a></div>
            <div className="info">Github: <a href="https://github.com/LordDz">https://github.com/LordDz</a></div>
            <p className="text-notes">{aboutText.notes}</p>

        </div>
    </div>


class About extends Component {

  render() {
    return (
         <div id="container-about">{AboutHTML}</div>
    );
  }
}

export default About;
