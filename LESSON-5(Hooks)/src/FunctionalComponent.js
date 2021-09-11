import React from "react";
import { useState, useEffect, useRef } from "react";

 const FunctionalComponent = () => {
    const [counter, setCounter] = useState(0)

    const [text, setText] = useState("")

    const inputRef = useRef(null);
    const divRef = useRef(null);

    const [active, setActive] = useState(true)

    const value = useRef(0)
    console.log(`value`, value)

    useEffect(() => {
        console.log("useEffect")
        // return() => console.log("ComponentWillUnmount")
    },[counter]) // dependancy

    const getIncrease = ()=> {
        setCounter(counter +1)
        value.current = value.current + 1  
        {/*  useRef in burada kullanılma amacı, setCounter(counter +1) ı çağırdığımızda counterın memory de tuttuğu yer değiştiğinden dolayı bütün sayfa tekrardan render ediliyor. Fakat setCounter(counter +1) ı yoruma alıp tekrar click butonuna bastığımızda value değeri arka planda artsa bile,  memory de tuttuğu yer değişmiyor, sabit kalıyor ve sayfa tekrar render olmuyor.
        useRef in diğer kullanılma amacı document.querySelector gibi DOM a ulaşmak içindi

        */}
    }

    const changeBGColor = () => {
        // console.log(inputRef.current.value)
        inputRef.current.parentElement.style.backgroundColor = text;

        // const newColor = document.getElementById("new-color")
        // console.log(newColor)
        // newColor.parentElement.style.backgroundColor = text;
        // newColor.style.backgroundColor = text;
        
    }

    const handleText = (e) => {
        setText(e.target.value)
        // console.log(e.target.value)
    }


    // const changeDivBorder =()=> {
    //     setActive(!active);
    //     active ?  divRef.current.style.border ="10px solid red" : divRef.current.style.border = "none";
    // }

     return (
         <div className="function" ref={divRef}>
            <h2>Functional Component</h2>

            <p>Counter : {counter}</p>

            <button onClick={getIncrease} >click </button>

           <br/> <br/> <hr/>

           <input ref={inputRef} type="text"  value={text} id="new-color" onChange={handleText}/>

           <button onClick={changeBGColor} > BG Color</button> 
           {/* <button onClick={changeDivBorder} > Div Border</button>  */}

         </div>
     )
 };

 export default FunctionalComponent;