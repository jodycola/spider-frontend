import React from 'react';
import Score from './Score';

const Board = () => {

    return(
        <div className="Board" style={{ position: 'fixed', width: '100%', height: '100%', background: '#14532d'}}>
            <Score/>
        </div>
    )
}

export default Board;