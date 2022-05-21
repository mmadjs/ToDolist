
import { useEffect, useRef, useState } from 'react';
const ToDoForm = (props) => {
    const[input , setinput ] = useState("")
    const inputRef =useRef(null)
    useEffect(()=>{inputRef.current.focus()},[])
    const chngeHandler=(e)=>{
        console.log(e.target.value);
        setinput(e.target.value)
    }
    const submitHandler=(e)=>{
        e.preventDefault()
        if(!input){
            alert("enter to do")
            return;
        }   
        props.SubmitTodo(input)     
        setinput(" ");       
    }
    
   
    return ( 
    <div>
        <form action="" onSubmit={submitHandler}>
  {props.edit ? (
    <>
            <input type="text" value={input} onChange={chngeHandler} placeholder="update todo..."
            ref={inputRef}/>
        <button type='Submit'>update</button>
    </>

):(
    <>
            <input type="text" value={input} onChange={chngeHandler} placeholder="add todo ..." 
            ref={inputRef}/>
        <button type='Submit'>add</button>
    </>

      )}
        </form>
        
    </div> );
}
 
export default ToDoForm;