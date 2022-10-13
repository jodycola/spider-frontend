import React, { useState } from 'react';
import { BoardStyles } from '../styles/BoardStyles';
import Position from './Position';
import Deck from './Deck';
import Score from './Score';
import ace from '../assests/spades_ace.png';
import king from '../assests/spades_king.png';
import queen from '../assests/spades_queen.png';
import jack from '../assests/spades_jack.png';
import ten from '../assests/spades_ten.png';
import nine from '../assests/spades_nine.png';
import eight from '../assests/spades_eight.png';
import seven from '../assests/spades_seven.png';
import six from '../assests/spades_six.png';
import five from '../assests/spades_five.png';
import four from '../assests/spades_four.png';
import three from '../assests/spades_three.png';
import two from '../assests/spades_two.png';

const Board = () => {

    const [deal, setDeal] = useState([])

    // Collection of cards
    const allCards = [
        ace, king, queen, jack, ten, nine, eight, 
        seven, six, five, four, three, two
    ]

    const DealCards = () => {
        let array = []

        for (let i = 0; i < 10; i++) {
            array.push(allCards[Math.floor(Math.random()*allCards.length)])
        }

        setDeal(array)
    }

    return(
        <BoardStyles>
            <div className="top">
                <Position 
                    deal={deal}
                />
            </div>
            <div className="bottom">
                <Score/>
                <Deck
                    DealCards={DealCards}
                />
            </div>
        </BoardStyles>
    )
}

export default Board;