import React, {useState} from 'react';
import DrumPad from "./DrumPad";
import VolumeControl from "./VolumeControl";
import OnOffSwitch from "./OnOffSwitch";
import CollectionSwitch from "./CollectionSwitch";

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

const drumKit = [
    {note: "Q", keyCode: "81", name: "Snare", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/35[kb]SNARE2.wav.mp3"},
    {note: "W", keyCode: "87", name: "B Drum", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/30[kb]BDRUM13.wav.mp3"},
    {note: "E", keyCode: "69", name: "China 1",sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/188[kb]CHINA1.wav.mp3"},
    {note: "A", keyCode: "65", name: "Clap 0",sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/58[kb]CLAPPO0.wav.mp3"},
    {note: "S", keyCode: "83", name: "Cowbell", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/12[kb]COWBELL1.wav.mp3"},
    {note: "D", keyCode: "78", name: "Crash", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/106[kb]CRASH.wav.mp3"},
    {note: "Z", keyCode: "90", name: "HH Close", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/8[kb]HHCLOSE1.wav.mp3"},
    {note: "X", keyCode: "88", name: "HH Close 2", sound: "https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/REAL%20LIVE%20KITS/Big%20and%20Heavy%20Real%20Drum%20Kit/16[kb]HHCLOSE2.wav.mp3"},
    {note: "C", keyCode: "67", name: "Closed-HH", sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},
]

const Machine = () => {
    const [notePlayed, setNotePlayed] = useState("")
    const [audio, setAudio] = useState()
    const [volumeValue, setVolumeValue] = useState(0.3)
    const [power, setPower] = useState(true)
    const [collection, setCollection] = useState(drumKit)

    return (
        <div className="machine-wrapper">
            <div className="pads-wrapper">
                {
                    collection.map((sound) => <DrumPad
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
                    <CollectionSwitch
                        power={power}
                        collection={collection}
                        setCollection={setCollection}
                        heaterKick={heaterKick}
                        drumKit={drumKit}
                    />
                </div>
            </div>
        </div>
    );
};

export default Machine;
