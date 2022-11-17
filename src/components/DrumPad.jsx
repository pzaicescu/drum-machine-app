import React, {useEffect} from 'react';

const DrumPad = (props) => {
    const audioPlayed = new Audio(props.sound)

    const handleClick = () => {
        props.setNotePlayed(props.name)
        props.setAudio(audioPlayed)
        audioPlayed.play()
    }

    useEffect(()=> {
        audioPlayed.volume = props.volumeValue
    })

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
