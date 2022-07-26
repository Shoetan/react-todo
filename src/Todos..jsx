const Todos = ({todo}) => {
    return (  
        <div className=" container mx-auto  mt-6 flex justify-around">
            <h1 className="text-black">
                    {todo}
            </h1>
            <button className="bg-gray-400 p-2 w-auto">x</button>
        </div>
    );
}
 
export default Todos;