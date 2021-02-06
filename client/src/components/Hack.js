import React, { useState } from 'react'; 
import './style.css';

const Hack = (props) => {
    const name = props.name;
    console.log("hi, " + name);

    const [count, setCount] = useState(0);


    return (<div>
        <p className="heading2">Hi, { name }</p>
        <p>Count: { count }</p>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>)
}

export default Hack;