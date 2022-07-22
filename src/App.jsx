import { useState } from "react";



const App = () => {
/* create a state to keep track of all the todos preferably an array */

const [todos, setTodos] = useState([])

/* create state to keep track of every newly inputed task */

const [newTask ,setNewTask] = useState('')


/* Fucntion that handles the change in input and sets that value to the newtask state */

const handleChange = (event) => {
  setNewTask(event.target.value)
}

/* create a function to add the task to the array todos */

const addTask = () =>{
  const newTodos = [...todos, newTask]
  setTodos(newTodos)
}



  return ( 
    <div className="font-poppins">
      <div>
        <input type="text" onChange={handleChange} value={newTask}/>
        <button className="" onClick={addTask}>Add Todo</button>
      </div>

    </div>
   );
}
 
export default App;
