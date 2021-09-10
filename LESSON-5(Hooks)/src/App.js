import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
import { useState } from "react";

function App() {
  const [Isvisible, setIsvisible] = useState(true)
  console.log(Isvisible)

  return(
    <div className="App">
      <button onClick={() => {setIsvisible(!Isvisible)}} >Toggle</button>

      {true && <ClassComponent />}

      {Isvisible ? <FunctionalComponent /> : null}

      {/* {Isvisible ? <FunctionalComponent /> : <ClassComponent /> }   */}

      {/* <ClassComponent /> */}
      {/* <FunctionalComponent /> */}
    </div>
  )
}

export default App;