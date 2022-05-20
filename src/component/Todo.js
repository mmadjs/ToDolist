const Todo = ({todo,onCompelte}) => {
    return ( <div className="todo-container" >
    <div key={todo.id} className="todo"> 
        <div className="main-todo">
            <div>{todo.text}</div>
            <div>
                <button >Edit</button>
                <button onClick={onCompelte} >complete</button>
            </div>
        </div>

            </div>
       
    </div> );
}
 
export default Todo;