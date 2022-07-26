const Todos = ({todo, key}) => {
    return (  
        <div>
            <li className="text-black">
                    {todo}
            </li>
        </div>
    );
}
 
export default Todos;