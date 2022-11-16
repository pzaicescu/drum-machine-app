import React from 'react';

const DrumPad = (props) => {

    const handleClick = () => {
        props.setNotePlayed(props.name)
        new Audio(props.sound).play()
    }

    return (
        <div>
            <button className="pad"
                    onClick={handleClick}
            >
                <h1>{props.note}</h1>
            </button>
        </div>
    );
};

export default DrumPad;
