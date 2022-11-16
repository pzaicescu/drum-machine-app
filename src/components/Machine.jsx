import React, {useState} from 'react';
import DrumPad from "./DrumPad";

const Machine = () => {
    const [notePlayed, setNotePlayed] = useState("")

    const pianoSounds = [
        {note: "Q", keyCode: "81", name: "Heater 1", color: "orange", sound: ""},
        {note: "W", keyCode: "87", name: "Heater 2", color: "orange", sound: ""},
        {note: "E", keyCode: "69", name: "Heater 3", color: "orange", sound: ""},
        {note: "A", keyCode: "65", name: "Heater 4", color: "yellow", sound: ""},
        {note: "S", keyCode: "83", name: "Clap", color: "yellow", sound: ""},
        {note: "D", keyCode: "78", name: "Open-HH", color: "turquoise", sound: ""},
        {note: "Z", keyCode: "90", name: "Kick-n'-Hat", color: "red", sound: ""},
        {note: "X", keyCode: "88", name: "Kick", color: "yellow", sound: ""},
        {note: "C", keyCode: "67", name: "Closed-HH", color: "lightblue", sound: ""},
    ]


    return (
        <div className="machine-wrapper">
            <div className="pads-wrapper">
                {
                    pianoSounds.map((sound) => <DrumPad
                        name={sound.name}
                        key={sound.note}
                        note={sound.note}
                        color={sound.color}
                        setNotePlayed={setNotePlayed}
                    />
                )}
            </div>
            <h3>{notePlayed}</h3>
        </div>
    );
};

export default Machine;
