import { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if(inputValue.trim() !== ''){
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }


const handleDelete =(indexToDelete) => {
    const updatedList = todos.filter((_, index) => index !== indexToDelete);
    setTodos(updatedList); 
};

return(
    <div style ={{border: '2px solid blue', padding: '20px', margin: '20px'}}>
        <h3>Component 2: Todo List</h3>
        <input 
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type a task..." 
        />
        <button onClick={handleAddTodo}>Add Task</button>
        <ul>
            {todos.map((item, index) => (
                <li key = {index}>
                    {item}
                    <button onClick= {() => handleDelete(index)} style= {{marginLeft: '10px'}}>
                        Delete
                        </button>
                </li>
            ) )}
        </ul>
    </div>
);
};
export default TodoList;
