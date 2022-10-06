import React from 'react';
import { BoardStyles } from '../styles/BoardStyles';
import Position from './Position';
import Score from './Score';

const Board = () => {

    return(
        <BoardStyles>
            <div className="Board">
                <Position/>
                <Score/>
            </div>
        </BoardStyles>
    )
}

export default Board;