import React, {useState} from 'react';
import './App.css';

const Todo = ({ todo, completeTodo }) => {
  return (
    <div 
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button onClick={completeTodo}>Complete</button>
      </div>
    </div>
  )
}

const TodoForm = ({ addTodo, completeTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value} 
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    { text: "Pack for Buffalo", isCompleted: false },
    { text: "Learn hooks", isCompleted: false },
    { text: "Scare away this gnat", isCompleted: false }
  ]);

  const addTodo = (text) => setTodos([...todos, { text, isCompleted: false }])
  const completeTodo = (index) => setTodos([...todos.slice(0, index), {...todos[index], isCompleted: true}, ...todos.slice(index + 1)])
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={() => completeTodo(index)}
          />
        ))}
        <TodoForm {...{addTodo}} />
      </div>
    </div>
  );
}

export default App;
