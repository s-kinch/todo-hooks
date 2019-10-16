import React, {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { text: "Pack for Buffalo" },
    { text: "Learn hooks" },
    { text: "Scare away this gnat" }
  ]);

  // we'll render our todos here ...
  return <div></div>
}

export default App;
