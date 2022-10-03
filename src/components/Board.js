import React from 'react';
import { BoardStyles } from '../styles/BoardStyles';
import Position from './Position';
import Score from './Score';

const Board = () => {

    return(
        <BoardStyles>
            <div className="Board">
                <div className="Position1" style={{ position: 'absolute', right: '50px', top: '50px' }}>
                    <Position/>
                </div>
                <Score/>
            </div>
        </BoardStyles>
    )
}

export default Board;