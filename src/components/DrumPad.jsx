import React, {useEffect} from 'react';

const DrumPad = (props) => {
    const audioPlayed = new Audio(props.sound)

    const handleClick = () => {
        if(props.power) {
            props.setNotePlayed(props.name)
            props.setAudio(audioPlayed)
            audioPlayed.play()
        }
    }

    useEffect(()=> {
        audioPlayed.volume = props.volumeValue
        if(!props.power){
            props.setNotePlayed("")
        }
    })

    return (
        <div>
            <button className={props.power ? "pad" : "pad-disabled"}
                    onClick={handleClick}
                    id={props.id}
            >
                <h1>{props.note}</h1>
            </button>
        </div>
    );
};

export default DrumPad;
