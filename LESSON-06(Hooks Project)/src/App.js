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
  }, []) // [] sadece sayfa açıldığında apiden gelen dataları render etsin.

  const handleText =(e)=> {
    setText(e.target.value)
  }

  const handleSearch =()=> {
    setSearch(text)
  }

  const filteredStudents = useMemo(()=> studentsList.filter(student => {
    return student.name.toLowerCase().includes(search.toLocaleLowerCase())
  }),[search,studentsList]) // useEffect de olduğu gibi useMemo'da da dependancy kullanıyoruz.

  

  // useMemo hafızaya alınmış değeri döndürür. Değeri hafızaya alır ve  gereksiz render etmeyi engeller. Props geçtiğimiz List componentine React.memo tanımlayınca kendisini ilgilendirdiği için rerender ediyordu. UseMemo kullandığımızda List de değişiklik olsa bile render etmiyor. Yani burada olduğu gibi biz ne zaman istersek (search ve studentList dependancy olarak geçtiğimizde) o zaman render edildi.   

  
  const add = useCallback(()=> {setStudentsList([...studentsList, {id: studentsList.length + 1 , name:text}])},[text, studentsList]) 

  // hafızaya alınmış callback fonksiyonu döndürür.

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

      {/* <List students={studentsList} add={add}/> */}
      <List students={filteredStudents} add={add}/>


    </div>
  )
}
export default App;