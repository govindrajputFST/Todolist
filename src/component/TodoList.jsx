import React, { useState } from 'react';
import  "./style.css";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };
  const handleClearTask=(e)=>{
    e.preventDefault();
    setTasks([]);
  }
//   const handleDelete=(index)=>{
//     let temp=[...tasks];
//     temp.splice(index,1);
//     setTasks(temp)
//   }


  return (
    <div className='mainbox'>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>Add</button>
        <button onClick={handleClearTask} className='buttonclear'>Clear All</button>
      </div>
      <div className='listbox'>
      <ul>
        {tasks.map((task, index) => (
          <div className='mapbox'><li key={index}>{task}
           {/* <button className='delbox' onClick={()=>handleDelete(index)}> Delete </button> */}
           </li></div>
        ))}
      </ul>
    </div>
      
    </div>
  );
}

export default TodoList;
