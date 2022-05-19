
import { useState } from 'react';
const ToDoForm = (props) => {
    const[input , setinput ] = useState("")
   
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
        props.addToDoHandler(input)     
        setinput(" ");       
    }
   
    return ( 
    <div>
        <form action="" onSubmit={submitHandler}>
        <input type="text" value={input} onChange={chngeHandler} />
        <button type='Submit'>add</button>
        </form>
        
    </div> );
}
 
export default ToDoForm;