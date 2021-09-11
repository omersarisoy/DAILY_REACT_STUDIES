import React, {useState, useEffect, useMemo, useCallback} from 'react';
import Header from './components/Header';
import List from './components/List';
import fs from './assets/fs.png';
import aws from './assets/aws.png';
import axios from 'axios';


function App() {
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState();
  const [studentsList, setStudentsList] = useState([])

  const [text, setText] = useState("");
  console.log(`text`, text)

  const [search, setSearch] = useState("")
  console.log(`search`, search)


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    // .then(response => console.log(response))
    .then(res => setStudentsList(res.data))
  }, [])

  const handleText =(e)=> {
    setText(e.target.value)
  }

  const handleSearch =()=> {
    setSearch(text)
  }

  const filteredStudents = useMemo(()=> studentsList.filter(student => {
    return student.name.toLowerCase().includes(search.toLocaleLowerCase())
  }),[search,studentsList]) 

  

  // useMemo değeri hafızaya alır ve  gereksiz render etmeyi engeller. Burada olduğu gibi biz ne zaman istersek o zaman render edildi. Yani search ve studentList dependancy olarak geçtiğinde. 


  
  const add = useCallback(()=> {setStudentsList([...studentsList, {id: studentsList.length + 1 , name:text}])},[text, studentsList]) 

  // console.log(studentsList)
  
  // ...array ===>>> spread operator ==>>> listenin geri kalanını da al sıradaki yazdığımı ekle

  return (
    <div className='App'>
      <Header img={img} />

      <p>Counter : {counter} </p>

      <button onClick={()=> setCounter(counter + 1)}> Increase </button>

      <button onClick={()=> setImg(fs)}> FS </button>
      
      <button onClick={()=> setImg(aws)}> AWS </button>

      <button onClick={()=> setImg(false || "")}> reset </button>
      {/* {Header'da false gelirse cw logo döndür demiştik*/}

      <br/> <br/> <hr/>


      <input type="text" value={text} onChange={handleText}/>

      <button onClick={handleSearch} >Search </button>

      <List students={filteredStudents} add={add}/>


    </div>
  )
}
export default App;