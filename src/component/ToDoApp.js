import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
const ToDoApp = () => {
const[todos,setTodo]=useState([])

const addToDoHandler=(input)=>{ 
    // console.log(input);
    const newtodo ={id:Math.floor(Math.random()*100),text:input,isCompleated:false}
    setTodo([...todos ,newtodo] )
}
const completeTodo=(id)=>{
    const index = todos.findIndex((todos)=>todos.id===id);
    const selectedtod = {...todos[index]}
    selectedtod.isCompleated =!selectedtod.isCompleated;
    console.log(index,selectedtod );

    const UpdateTodo = [...todos];
    UpdateTodo[index]= selectedtod;
    setTodo(UpdateTodo)
    console.log(UpdateTodo,UpdateTodo[index]);

    
}
const DleteTodo =(id)=>{
    console.log(id);
    const delet =todos.filter((todo)=>todo.id !==id);
    setTodo(delet)
    
}
    return ( <div className="container" >
        <ToDoForm addToDoHandler={addToDoHandler}/>
        <ToDoList todos={todos} onCompeltehandler={completeTodo} onDeletHandler={DleteTodo}/>

    </div> );
}
 
export default ToDoApp;