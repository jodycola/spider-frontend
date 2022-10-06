import React from 'react';
import { BoardStyles } from '../styles/BoardStyles';
import Position from './Position';
import Deck from './Deck';
import Score from './Score';

const Board = () => {

    return(
        <BoardStyles>
            <div className="board">
                <Position/>
                <Deck/>
                <Score/>
            </div>
        </BoardStyles>
    )
}

export default Board;