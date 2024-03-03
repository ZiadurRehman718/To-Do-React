import { useState } from "react";
import Navbar from "./Navbar";
import React from "react";

const App = () => {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    console.log(text);
    setTodo([...todo, text]);
    console.log(todo);
    setText("");
  }

  function editTodo(index) {
    console.log(index);
    let newTodo = prompt("Enter new task");
    todo.splice(index,  1, newTodo);
    setTodo([...todo]);
}

function deleteTodo(index) {
  console.log(index);
  todo.splice(index, 1);
  setTodo([...todo]);
}

  return (
    <>
      <Navbar />
      <form
        className="flex justify-center items-center h-[20vh] w-[100vw]"
        onSubmit={addTodo}
      >
        <input
          className="rounded-lg w-[38%] pl-3 border-2 h-10"
          type="text"
          placeholder="Enter your task"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className="ml-2 text-white bg-[#0F9690] transition-colors hover:bg-[#0f968fca] border-[#0F9690] rounded-lg h-10 w-20">
          Add Task
        </button>
      </form>
      <ul className="flex flex-col items-center">
        {todo.map((item, index) => {
          return (
            <li
              className="flex justify-between items-center h-16 rounded-lg pl-3 mt-3 bg-[#0F9690] text-white text-lg border-2 border-[#0F9690] w-[44vw]"
              type="none"
              key={index}
            >
              <div className="flex items-center">{item}</div>
              <div className="flex mr-3 space-x-3">
                <button className="bg-[#45DFB1] transition-colors hover:bg-[#57ff5dca] border-[#45DFB1] rounded-md h-10 w-16" onClick={()=>editTodo(index)}>
                  Edit
                </button>
                <button className="bg-[#80ED99] transition-colors hover:bg-[#ff3232ca] border-[#80ED99] border-2 rounded-md h-10 w-16" onClick={()=>deleteTodo(index)}>
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default App;
