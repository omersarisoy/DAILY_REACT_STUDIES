// import logo from './logo.svg';
import './App.css';

import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from './components/FunctionalComponent';

function App() {
  return (
    <div className="App">
      <ClassComponent surname = "SARISOY"/>
      <FunctionalComponent name = "Ömer"/>

    </div>
  );
}

export default App;
