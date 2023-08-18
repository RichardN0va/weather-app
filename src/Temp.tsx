import React from "react"
import { useState } from "react"
export const Temp = ({setSystem}:any) => {
    const [click, setClick] = useState("metric");

    const handleCelsius = () => {
        setClick("metric");
        setSystem(click);
    }
    const handleFahrenheit = () => {
        setClick("imperial");
        setSystem(click);
    }
    return <div className="temp_units">
        <button onClick={handleCelsius}>&deg;C</button>
        <button onClick={handleFahrenheit}>&deg;F</button>
    </div>
}