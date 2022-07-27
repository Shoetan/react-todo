const Todos = ({todo, delTodo}) => {
    return (  
        <div className=" w-96 mx-auto  mt-6 flex justify-around border-b-2 border-slate-400">
            <h1 className="text-black">
                    {todo}
            </h1>
            <button className="text-indigo-400 font-bold rounded py-2 w-2/12 bg-gray-900 mb-2" onClick={delTodo}>x</button>
        </div>
    );
}
 
export default Todos;