import '../App.css';

const Todo = ({todo,onCompelte,onDelet,onEdit}) => {
    return ( <div className="todo-container" >
    <div key={todo.id} className="todo"> 
        <div className="main-todo">
            <div onClick={onCompelte} className={todo.isCompleated ? "completedTrue" : ""} >{todo.text}</div>
            <div>
                <button className='edit-button' onClick={onEdit} >Edit</button>
                <button className='delet-button' onClick={onDelet} >Delet</button>
            </div>
        </div>

            </div>
       
    </div> );
}
 
export default Todo;