import React, { useState } from "react";
import GridButton from './GridButton';

const Grid = (props) => {
    const [beat, setBeat] = useState([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);

    

    

    return (
        <div id="grid-container">
            <GridButton setBeat={setBeat} beat={beat} xpos='0' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='1' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='2' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='3' ypos='0'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='4' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='5' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='6' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='7' ypos='0'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='8' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='9' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='10' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='11' ypos='0'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='12' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='13' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='14' ypos='0'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='15' ypos='0'/>
            
            
            <br />

            <GridButton setBeat={setBeat} beat={beat} xpos='0' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='1' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='2' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='3' ypos='1'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='4' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='5' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='6' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='7' ypos='1'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='8' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='9' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='10' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='11' ypos='1'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='12' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='13' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='14' ypos='1'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='15' ypos='1'/>
            
            
            <br />

            <GridButton setBeat={setBeat} beat={beat} xpos='0' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='1' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='2' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='3' ypos='2'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='4' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='5' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='6' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='7' ypos='2'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='8' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='9' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='10' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='11' ypos='2'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='12' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='13' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='14' ypos='2'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='15' ypos='2'/>
            
            
            <br />

            <GridButton setBeat={setBeat} beat={beat} xpos='0' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='1' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='2' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='3' ypos='3'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='4' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='5' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='6' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='7' ypos='3'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='8' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='9' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='10' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='11' ypos='3'/>

            <GridButton setBeat={setBeat} beat={beat} xpos='12' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='13' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='14' ypos='3'/>
            <GridButton setBeat={setBeat} beat={beat} xpos='15' ypos='3'/>
            
            
            <br />

        </div>
    )

};

export default Grid;