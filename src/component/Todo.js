const Todo = ({todo,onCompelte,onDelet}) => {
    return ( <div className="todo-container" >
    <div key={todo.id} className="todo"> 
        <div className="main-todo">
            <div onClick={onCompelte} className={todo.isCompleated ? "completedTrue" : ""} >{todo.text}</div>
            <div>
                <button >Edit</button>
                <button onClick={onDelet} >Delet</button>
            </div>
        </div>

            </div>
       
    </div> );
}
 
export default Todo;