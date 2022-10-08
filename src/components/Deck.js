import React from "react";
import { DeckStyles } from '../styles/DeckStyles';
import card from '../assests/card_back.jpeg';


const Deck = () => {

    return (
        <DeckStyles>
            <div className="deck">
                <img src={card} alt="deck"/>
            </div>
        </DeckStyles>
    )
}

export default Deck;