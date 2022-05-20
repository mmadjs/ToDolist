const Todo = ({todo,onCompelte}) => {
    return ( <div className="todo">
    <div key={todo.id}> 
        <div>
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