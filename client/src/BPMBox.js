import React, { useState } from "react";

const BPMBox = (props) => {
    const [bpm, setbpm] = useState(140);

    const handleChange = (event) => {
        setbpm(event.target.value);
    }

    return (
        <form>
            <input id="bpm-input" value={bpm} onChange={handleChange}></input>
        </form>
    )

};

export default BPMBox;