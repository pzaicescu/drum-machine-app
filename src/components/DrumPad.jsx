import React from 'react';

const DrumPad = (props) => {

    const handleClick = () => {
        props.setNotePlayed(props.name)
    }

    return (
        <div>
            <button className="pad"
                    id={props.note}
                    onClick={handleClick}
            >
                <h1>{props.note}</h1>
            </button>
        </div>
    );
};

export default DrumPad;
