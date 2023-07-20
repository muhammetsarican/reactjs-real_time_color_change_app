import React, { useState } from 'react'
import { send } from '../socketApi'

export default function Palette({ activeColor }) {
    const [color, setColor] = useState("#000");
    return (
        <div className='palette'>
            <h1 style={{ color: "white" }}>{activeColor}</h1>
            <input type='color' value={activeColor} onChange={(e) => setColor(e.target.value)}></input>
            <button onClick={() => send(color)}>Change Color</button>
        </div>
    )
}
