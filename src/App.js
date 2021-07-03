import React,{useState} from 'react';
import './App.css';

function App() {
  const [text, setText] = useState()
  const [id, setId] = useState()
  const [tasks, setTasks] = useState([])

    const changeText=(e)=>{
      setText(e.target.value);

    
    }
    const add=()=>{
      setId(Date.now())
      setTasks([...tasks,{"id":id,"Task":text}])
      setText("");
    }
    const del=(id)=>{
      const newList=tasks.filter((item)=>item.id!==id);
      setTasks(newList);

    }

return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
          <h1>TODO App</h1>
        <input onChange={changeText} value={text} placeholder="enter a task.." /><br />
        <button onClick={add}>Add task</button>
        <h4>Developed by Yukti </h4>
        </div>
        <div className="task">

          {tasks.map((task=>
          <div className="card">
            <h1>{task.Task}</h1>
            <button onClick={()=> del(task.id)}>Done</button>
          </div>
          ))}
         
        </div>

      </div>
    </div>
  );
}

export default App;
