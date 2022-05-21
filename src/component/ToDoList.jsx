import { useState } from "react";
import Todo from "./Todo";
import ToDoForm from "./ToDoForm";
const ToDoList = ({todos,onCompeltehandler,onDeletHandler,onUpdateTodo}) => {
    const [edit , setEdit]=useState({id:null,text:"" , isCompelted:false})
    
const Edithtodo =(newvalue)=>{
    onUpdateTodo(edit.id,newvalue)
    setEdit({id:null,text:" "})
}
const renderTodo=()=>{
    if(todos.length === 0) return <p>empty</p>;
    return todos.map((todo)=>{
    
    return( <Todo key={todo.id} todo={todo}
        
    
        onCompelte={()=>onCompeltehandler(todo.id)}
        onDelet={()=>onDeletHandler(todo.id)} 
        onEdit={()=>setEdit(todo)}   />
       
);
});
};
         
    


return <div>{edit.id ? <ToDoForm SubmitTodo={Edithtodo} edit={edit}/>:renderTodo()}</div> ;


};
 
export default ToDoList;