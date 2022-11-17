import React from 'react';

const CollectionSwitch = (props) => {

    const handleToggleOnOff = (e) => {
        if (e.target.checked) {
            props.setCollection(props.heaterKick)
        } else {
            props.setCollection(props.drumKit)
        }
    }

    return (
        <div className="on-off-wrapper">
            {props.collection === props.heaterKick ? <h5>HH Kick</h5> : <h5>DrumKit</h5>}
            <label className="switch">
                <input type="checkbox" disabled={!props.power} defaultChecked={false} onChange={handleToggleOnOff}/>
                <div className="slider kit"></div>
            </label>
        </div>
    );
};

export default CollectionSwitch;
