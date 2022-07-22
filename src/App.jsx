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
  
  /* use the tenary operator to add a task only if the input field is not empty */

  newTask !=='' ? setTodos( [...todos, newTask]) : console.log('Enter a task');

  console.log(todos);
  /* Clear the input field once the add task button is clicked */
  setNewTask("")
 
}



  return ( 
    <div className="font-poppins">
    {/* Input field and button */}
      <div className="container mx-auto justify-center flex gap-4 mt-6">
        <input type="text" onChange={handleChange} value={newTask} placeholder="Create new todo.." className="h-8 w-96 rounded-md p-6 focus:outline-none bg-slate-50"/>
        <button className="bg-blue-400 text-black p-2 rounded-full hover:bg-blue-500" onClick={addTask}>Add Todo</button>
      </div>
    {/* Display the list in the array */}
      <div>

      </div>

    </div>
   );
}
 
export default App;
