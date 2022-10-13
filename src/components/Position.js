import React from 'react';
import { PositionStyles } from '../styles/PositionStyles';
import Card from '../components/Card.js'

const Position = ({ deal }) => {

    return (
        <PositionStyles>
            <div className="position">
                <div className="position-1">
                    <Card
                        card={deal[0]}
                    />
                </div>
                <div className="position-2">
                    <Card
                        card={deal[1]}
                    />
                </div>
                <div className="position-3">
                    <Card
                        card={deal[2]}
                    />
                </div>
                <div className="position-4">
                    <Card
                        card={deal[3]}
                    />
                </div>
                <div className="position-5">
                    <Card
                        card={deal[4]}
                    />
                </div>
                <div className="position-6">
                    <Card
                        card={deal[5]}
                    />
                </div>
                <div className="position-7">
                    <Card
                        card={deal[6]}
                    />
                </div>
                <div className="position-8">
                    <Card
                        card={deal[7]}
                    />
                </div>
                <div className="position-9">
                    <Card
                        card={deal[8]}
                    />
                </div>
                <div className="position-10">
                    <Card
                        card={deal[9]}
                    />
                </div>
            </div>
        </PositionStyles>
    )
}

export default Position;