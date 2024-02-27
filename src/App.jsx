import React, { useState } from 'react'

const App = () => {
  const [text , setText] = useState ("")
  const [todo , setTodo] = useState ([])
  
  function addTodo(event) {
    event.preventDefault();
    console.log(text);
    setTodo([...todo, text]);
    console.log(todo);
    setText("")
  }

  function deletetodo(index) {
    console.log(index);
    todo.splice(index, 1);
    setTodo([...todo]);
  }

  function edittodo(index) {
    console.log(index);
    let newTodo = prompt("Enter new task");
    todo.splice(index,  1, newTodo);
    setTodo([...todo]);
}
  return (
    <>
    <h1>Note Todo's</h1>
    <form onSubmit={addTodo}>
    <input type="text" placeholder='Enter your task' onChange={(e) => setText(e.target.value)} value={text}/>
    <button type='submit'>Add Task</button>
    </form>
    <ul>
      {todo.map((item , index) => {
        return <li key={index}>{item}
        <button onClick={()=>deletetodo(index)}>Delete</button>
        <button onClick={()=>edittodo(index)}>Edit</button>
        </li>
      })}
    </ul>
    </>
  )
}

export default App