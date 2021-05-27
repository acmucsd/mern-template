import React, { useState } from "react";

const GridButton = (props) => {
    const [Active, setActive] = useState(false);

    const Styles = {
        backgroundColor: Active ? '#ECB858' : '#E5E5E5',
    };

    const clickHandler = (event) => {
        setActive(!Active);
        const newBeat = Array.from(props.beat);
        const oldVal = newBeat[props.ypos][props.xpos];
        newBeat[props.ypos][props.xpos] = Math.abs(oldVal - 1);
        props.setBeat(newBeat);
        console.log(props.beat);
    }

    return (
        <button className="grid-button" onClick={clickHandler} style={Styles}></button>
    )

};

export default GridButton;