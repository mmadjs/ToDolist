import Todo from "./Todo";
const ToDoList = ({todos,onCompeltehandler}) => {
    if(todos.length === 0) return <p>empty</p>;

    return ( <div >
{todos.map((todo)=>{
  return <Todo key={todo.id} todo={todo}
    onCompelte={()=>onCompeltehandler(todo.id)} />
   
})}
    </div> );
}
 
export default ToDoList;