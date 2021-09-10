import React from "react";
import { useState, useEffect } from "react";

 const FunctionalComponent = () => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("useEffect")
        return() => console.log("ComponentWillUnmount")
    },[counter ])

    const getIncrease = ()=> {
        setCounter(counter +1)
    }

     return (
         <div className="function">
            <h2>Functional Component</h2>

            <p>Counter : {counter}</p>

            <button onClick={getIncrease} >click </button>
         </div>
     )
 };

 export default FunctionalComponent;