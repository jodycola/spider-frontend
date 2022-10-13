import React from 'react';
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


const Card = ({ card }) => {

    return (
        <div className="card">
            <img src={card}/>
        </div>
    );
}

export default Card;