import { useEffect, useRef, useState } from "react";
const ToDoForm = (props) => {
  const [input, setinput] = useState(props.edit ? props.edit.text :" ");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  },[]);
  const chngeHandler = (e) => {
    console.log(e.target.value);
    setinput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter to do");
      return;
    }
    props.SubmitTodo(input);
    setinput(" ");
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler} className="formcontorl">
        <input
          type="text"
          value={input}
          onChange={chngeHandler}
          placeholder={props.edit ? "update  todo ... ":" add todo. "}
          ref={inputRef}
        />
        <button className={props.edit ? "btn-update" :"btn-addtodo"} type="Submit"> {props.edit ? "update":"add"} </button>
      </form>
    </div>
    );
};

export default ToDoForm;
