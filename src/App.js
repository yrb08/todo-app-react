import React,{useState} from 'react';
import './App.css';

function App() {


return (
    <div className="App">
      <div className="container">
        <div className="sidebar">
        <input placeholder="enter a task.." /><br />
        <button>Add task</button>
        </div>
        <div className="task">
          <div className="card">
            <h1>task1</h1>
            <button>Done</button>
          </div>
         
        </div>

      </div>
    </div>
  );
}

export default App;
