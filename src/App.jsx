import { useState } from "react";
import Todos from "./Todos.";


const App = () => {
/* create a state to keep track of all the todos preferably an array */

const [todos, setTodos] = useState([])

/* create state to keep track of every newly inputed task */

const [newTask ,setNewTask] = useState("")


/* Fucntion that handles the change in input and sets that value to the newtask state */

const handleChange = (event) => {
  setNewTask(event.target.value)
}

/* create a function to add the task to the array todos */

const addTask = () =>{

/**
 * *The tenary opertion is in use here to check if the input field is empty or not.If empty dispaly an error message if not add the task to the array but the task added is an object consisting of a unique id the that takes the length of the items in the array and adds one to it and the new task that was typed in the input field.
 */
  newTask !=="" ? setTodos([...todos, {id:todos.length + 1 ,task:newTask}]) : console.log('Enter a task');

  /* Clear the input field once the add task button is clicked */
  setNewTask("")
 
}

/* 
*Below is a deltask function.This function receives a parameter of id. Each id is unique within the array of tasks. The filter method is applied to array to return a set of new array containing all items whose id does not match the givin id parameter
 */
const delTask = (id) => {
    const newTodo = todos.filter((todo)=>{
      return (todo.id !== id)
    })

/* updates the tasks list array with a new set of items excluding that with the id given as a parameter in the function*/
    setTodos(newTodo)
}



  return ( 
    <div className="font-poppins">
    {/* Input field and button */}
      <div className="container mx-auto justify-center flex gap-4 mt-6">
        <input type="text" onChange={handleChange} value={newTask} placeholder="Create new todo.." className="h-8 w-96 rounded-md p-6 focus:outline-none bg-slate-50"/>
        <button className="bg-blue-400 text-black p-2 rounded-full hover:bg-blue-500" onClick={addTask}>Add Todo</button>
      </div>


    {/* Loop through the array that is made up of objects with unique id */}
      <div>
          {todos.map((todo)=>{
            
            {/* return a component here for the todos */}
            return  <Todos  todo = {todo.task} delTodo = {()=>{delTask(todo.id)}} />
           
          })}
          
      </div>

    </div>
   );
}
 
export default App;
