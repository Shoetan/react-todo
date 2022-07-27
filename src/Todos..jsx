const Todos = ({todo, delTodo}) => {
    return (  
        <div className=" container mx-auto  mt-6 flex justify-around">
            <h1 className="text-black">
                    {todo}
            </h1>
            <button className="bg-slate-400" onClick={delTodo}>x</button>
        </div>
    );
}
 
export default Todos;