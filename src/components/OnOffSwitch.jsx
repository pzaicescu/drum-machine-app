import React from 'react';

const OnOffSwitch = (props) => {

    const handleToggleOnOff = (e) => {
        if (e.target.checked) {
            props.setPower(true)
        } else {
            props.setPower(false)
        }
    }

    return (
        <div className="on-off-wrapper">
            <h5>OFF / ON</h5>
            <label className="switch">
                <input type="checkbox" defaultChecked={props.power} onChange={handleToggleOnOff}/>
                    <div className="slider"></div>
            </label>
        </div>
);
};

export default OnOffSwitch;
