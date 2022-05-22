import './Todo.css';
import Todolist from "../todo-list/TodoList";
import TodoCreate from '../todo-create/TodoCreate';

const Todo = () => {

    const todos = [
        { id: 1, title: 'Eat'},
        { id: 2, title: 'Sleep'},
        { id: 3, title: 'Code'},
        
    ];

    const eventCreateTodo = ( todo ) => {
        todos.push();
        console.log(todos);
    }
    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate onCreateTodo={eventCreateTodo}/>
            <Todolist dataTodos={todos} />
        </div>
    );
}

export default Todo