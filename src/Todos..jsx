const Todos = ({todo, delTodo, markDone,complete}) => {
    return (  
        <div className={" w-96 mx-auto  mt-6 flex justify-between border-b-2 border-slate-400"}>
      {/* 
         *Conditional rendering if the complete prop is true render the h1 tag that has the line through style else render the h1 tag without the line through style
      
       */}
        { complete ? 
        
        
            <h1 className="text-black font-bold line-through"> 
                    {todo}
            </h1> :  <h1 className="text-black font-bold"> 
                    {todo}
            </h1>

             }
           
            
            <div className="flex flex-row gap-5">
                <button onClick={markDone}>&#10004;</button>
                <button  onClick={delTodo}>X</button>
            </div>
            
        </div>
    );
}
 
export default Todos;