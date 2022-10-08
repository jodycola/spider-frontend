import React from 'react';
import { BoardStyles } from '../styles/BoardStyles';
import Position from './Position';
import Deck from './Deck';
import Score from './Score';

const Board = () => {

    return(
        <BoardStyles>
            <div className="top">
                <Position/>
            </div>
            <div className="bottom">
                <Score/>
                <Deck/>
            </div>
        </BoardStyles>
    )
}

export default Board;