import Todo from "./Todo";
const ToDoList = ({todos,onCompeltehandler,onDeletHandler}) => {
    if(todos.length === 0) return <p>empty</p>;

    return ( <div className="todo" >
{todos.map((todo)=>{

  return <Todo key={todo.id} todo={todo}

    onCompelte={()=>onCompeltehandler(todo.id)}
    onDelet={()=>onDeletHandler(todo.id)} />
   
})}
    </div> );
}
 
export default ToDoList;