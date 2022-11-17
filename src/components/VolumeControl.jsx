import React from 'react';

const VolumeControl = (props) => {

    const handleChangeVolume = (e) => {
        props.setVolumeValue(e.currentTarget.value/100)
    }

    return (
        <div className="volume-control-wrapper">
            <h5>Volume</h5>
            <input
                type="range"
                defaultValue={props.volumeValue*100}
                onChange={handleChangeVolume}
                disabled={!props.power}
            ></input>
        </div>
    );
};

export default VolumeControl;
