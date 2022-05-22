import './TodoCreate.css';

function TodoCreate () {

    function handleSubmit ( event ) {
        event.preventDefault();
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: 'Learn react'
        }

        console.log(newTodo);
    }

    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoCreate;