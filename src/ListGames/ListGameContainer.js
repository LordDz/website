import React, { Component } from 'react';

import Modal from "react-responsive-modal";

class ListGameContainer extends Component{
    constructor(props){
        super(props)
        this.state = { open: false}
    }
    openModal(){
        this.setState({ open: true });
    }

    closeModal(){
        this.setState({ open: false });
    }


    render(){
        return ListGame(this.props.type, this.openModal.bind(this), this.closeModal.bind(this), this.state.open)
    }
}

const ListGame = (category, openModal, closeModal, isOpen) => category.map(game =>

    <div key={game.id} className={"section background-img " + game.classNames}>
        <div id={"id" + game.id} className="whiteframe grid-group-two">

            {/*Left*/}
            <div>
                <iframe title={game.videoUrl} width="560" height="315" src={"https://www.youtube.com/embed/" + game.videoUrl } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>

            {/*Right*/}
            <div>
                <h1>{game.name}</h1>
                <h2>{game.baseGame}</h2>
                <h4>{game.type}</h4>
                <p>{game.text}</p>
                <p/>
                <p className="text-notes">{game.notes}</p>
                <a className="a-download" href={game.url}>Download</a>
                <a className="a-work" href={null} onClick={() => openModal(game)}>WIP</a>


                <Modal open={isOpen} onClose={closeModal} center>
                <h2>Work process</h2>
                    <p>
                    Will include images on the process of making these, when I'm not lazy.
                    </p>
                </Modal>
            </div>
        </div>
    </div>
);

export default ListGameContainer;