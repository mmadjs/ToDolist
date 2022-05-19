import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
const ToDoApp = () => {
const[todos,setTodo]=useState([])

const addToDoHandler=(input)=>{ 
    // console.log(input);
    const newtodo ={id:Math.floor(Math.random()*100),text:input,isCompleated:false}
    setTodo([...todos ,newtodo ] )
}
    return ( <div className="container" >
        <ToDoForm addToDoHandler={addToDoHandler}/>
        <ToDoList />

    </div> );
}
 
export default ToDoApp;