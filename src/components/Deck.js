import React, { useState } from "react";
import { DeckStyles } from '../styles/DeckStyles';
import card from '../assests/card_back.jpeg';

const Deck = ({ DealCards }) => {

    return (
        <DeckStyles>
            <div className="deck">
                <img src={card} alt="deck" onClick={DealCards}/>
            </div>
        </DeckStyles>
    )
}

export default Deck;