import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const addATodo = () => {
    setTodos([...todos, inputText]);
    setInputText("");
  }

  return (
    <div className="app">
      <h1>ToDo App</h1>

      <form>
        <input value={inputText} onChange={event => setInputText(event.target.value)} type="text" />
        <button type="submit" onClick={addATodo}>Add A ToDo</button>
      </form>

      {todos.map((todo) => (
        <h2>{todo}</h2>
      ))}
    </div>
  );
}

export default App;
