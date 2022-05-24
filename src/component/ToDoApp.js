import { useEffect, useState } from "react";
import NavBar from "./Navbar";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
const ToDoApp = () => {
const[todos,setTodo]=useState([])
const [status,setstuos]=useState("All")
const [filtertodo ,setfiltertodo]=useState([])



useEffect(()=>{filterTodos(status.value )},[status,todos])

const addTodo=(input)=>{ 
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
    // console.log(UpdateTodo,UpdateTodo[index]);

    
}
const DleteTodo =(id)=>{
    console.log(id);
    const delet =todos.filter((todo)=>todo.id !==id);
    setTodo(delet)
    
}
const UpdateTodo=(id,newvalue)=>{
    const index = todos.findIndex((todos)=>todos.id===id);
    const selectedtod = {...todos[index]}
    selectedtod.text =newvalue
    console.log(index,selectedtod );
    const UpdateTodo = [...todos];
    UpdateTodo[index]= selectedtod;
    setTodo(UpdateTodo)

    console.log(id,"newvalue:",newvalue);
}
const filterTodos =(status)=>{
switch (status) {
    case "All":
        return setfiltertodo(todos)
        break;
    case "compoleted":
        return setfiltertodo(todos.filter((t)=>t.isCompleated))
        break
    case "uncompoleted":
        return setfiltertodo(todos.filter((t)=>!t.isCompleated))

    default:
        setfiltertodo(todos)
}}
    return ( <div className="container" >
        <NavBar uncompoletedtodos={todos.filter((t)=>!t.isCompleated).length}
        filterTodos={filterTodos}
        setstuos={setstuos}
        status={status}
        />

        <ToDoForm SubmitTodo={addTodo}/>
        <ToDoList todos={filtertodo} onCompeltehandler={completeTodo} onDeletHandler={DleteTodo}
        onUpdateTodo={UpdateTodo}
                   />

    </div> );
}
 
export default ToDoApp;