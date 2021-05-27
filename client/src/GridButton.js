import React, { useState } from "react";

const GridButton = (props) => {
    const [Active, setActive] = useState(false);
    const [Hover, setHover] = useState(false);

    const Styles = {
        backgroundColor: Hover ? '#fff0d3' : Active ? '#ECB858' : '#E5E5E5',
        cursor: 'pointer',
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
        <button className="grid-button" onClick={clickHandler} style={Styles} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}></button>
    )

};

export default GridButton;