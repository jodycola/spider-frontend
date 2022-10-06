import React from 'react';
import { PositionStyles } from '../styles/PositionStyles';
import card from '../assests/card_back.jpeg';

const Position = () => {

    return (
        <PositionStyles>
            <div className="position">
                <div className="position-1">
                    <img src={card}/>
                </div>
                <div className="position-2">
                    2
                </div>
                <div className="position-3">
                    3
                </div>
                <div className="position-4">
                    4
                </div>
                <div className="position-5">
                    5
                </div>
                <div className="position-6">
                    6
                </div>
                <div className="position-7">
                    7
                </div>
                <div className="position-8">
                    8
                </div>
                <div className="position-9">
                    9
                </div>
                <div className="position-10">
                    10
                </div>
            </div>
        </PositionStyles>
    )
}

export default Position;