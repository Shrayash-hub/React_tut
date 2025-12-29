import React, { useState } from 'react'
import {useTodo} from '../context/TodoContext'

function TodoItem({ todo }) {
    /**
     * CONCEPT 1: Local UI State
     * 'isTodoEditable' tracks whether the specific todo is currently in 
     * "Edit Mode" or "Read-Only Mode". This is local because only this 
     * specific item needs to know its editing status.
     */
    const [isTodoEditable, setIsTodoEditable] = useState(false)

    /**
     * CONCEPT 2: Synchronizing State with Props
     * 'todoMsg' is initialized with the message from the 'todo' prop.
     * This allows the user to type in the input field without immediately 
     * updating the global context until they hit "Save".
     */
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    /**
     * CONCEPT 3: Consuming Context Methods
     * We pull the specific handler functions from our global context.
     * These functions contain the logic to update the main array in App.jsx.
     */
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    /**
     * CONCEPT 4: Saving Edits
     * When saving, we pass the updated message back to the global state.
     * We use spread syntax (...todo) to keep the existing ID and status, 
     * only overwriting the 'todo' text.
     */
    const editTodo = ()=>{
        updateTodo(todo.id,{...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    /**
     * CONCEPT 5: Event Handlers
     * Simple wrapper functions that pass the unique ID to the context methods.
     */
    const toggleCompleted = ()=>{
        toggleComplete(todo.id)
    }

  return (
    /**
     * CONCEPT 6: Dynamic Styling (Conditional CSS)
     * The background color changes based on the 'todo.completed' boolean.
     * We use template literals to swap Tailwind classes dynamically.
     */
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      {/* CHECKBOX: Triggers the completion toggle */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/**
       * INPUT FIELD: Controlled Component
       * - readOnly: Locked when not in edit mode.
       * - line-through: Applied when task is completed.
       */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/**
       * EDIT/SAVE BUTTON: Multi-functional
       * 1. If completed, button is disabled.
       * 2. If in edit mode, it triggers editTodo() (Save).
       * 3. If in view mode, it toggles Edit Mode on.
       */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      {/* DELETE BUTTON: Removes the item from the global array */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;