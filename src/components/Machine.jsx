import React, {useState} from 'react';
import DrumPad from "./DrumPad";
import VolumeControl from "./VolumeControl";
import OnOffSwitch from "./OnOffSwitch";

const Machine = () => {
    const [notePlayed, setNotePlayed] = useState("")
    const [audio, setAudio] = useState()
    const [volumeValue, setVolumeValue] = useState(0.3)
    const [power, setPower] = useState(true)

    const heaterKick = [
        {note: "Q", keyCode: "81", name: "Heater 1", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},
        {note: "W", keyCode: "87", name: "Heater 2", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},
        {note: "E", keyCode: "69", name: "Heater 3",sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},
        {note: "A", keyCode: "65", name: "Heater 4",sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},
        {note: "S", keyCode: "83", name: "Clap", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},
        {note: "D", keyCode: "78", name: "Open-HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},
        {note: "Z", keyCode: "90", name: "Kick-n'-Hat", sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},
        {note: "X", keyCode: "88", name: "Kick", sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},
        {note: "C", keyCode: "67", name: "Closed-HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
    ]


    return (
        <div className="machine-wrapper">
            <div className="pads-wrapper">
                {
                    heaterKick.map((sound) => <DrumPad
                        name={sound.name}
                        key={sound.keyCode}
                        id={sound.keyCode}
                        note={sound.note}
                        sound={sound.sound}
                        power={power}
                        volumeValue={volumeValue}
                        setNotePlayed={setNotePlayed}
                        setAudio={setAudio}
                    />
                )}
            </div>
            <div className="controls-wrapper">
                <h3>{notePlayed}</h3>
                <VolumeControl
                    audio={audio}
                    volumeValue={volumeValue}
                    power={power}
                    setVolumeValue={setVolumeValue}
                />
                <div>
                    <OnOffSwitch
                        power={power}
                        setPower={setPower}
                    />
                </div>
            </div>
        </div>
    );
};

export default Machine;
