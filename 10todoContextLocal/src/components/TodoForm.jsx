import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext'

function TodoForm() {
    /**
     * CONCEPT 1: Local State Management
     * 'todo' is the local state for this specific input field.
     * We use local state because the rest of the app doesn't need to know 
     * what the user is typing character-by-character; it only needs the 
     * final string once the form is submitted.
     */
    const [todo, setTodo] = useState("")

    /**
     * CONCEPT 2: Consuming Global Context
     * 'useTodo' is your custom hook that gives access to the Context.
     * We destructure 'addTodo'—the function defined in App.jsx—to send 
     * our new data back to the central storage.
     */
    const {addTodo} = useTodo()

    /**
     * CONCEPT 3: Form Submission Logic
     * This function handles the "Add" action.
     */
    const add = (e) => {
        // e.preventDefault(): Stops the browser from refreshing the page 
        // when the form is submitted.
        e.preventDefault()

        // Validation: If the input is empty, don't do anything.
        if(!todo) return

        /**
         * CONCEPT 4: Data Construction
         * We call 'addTodo' and pass a new todo object. 
         * Note: We only pass {todo, completed} because App.jsx handles 
         * generating the unique ID (using Date.now()).
         */
        addTodo({todo, completed: false})

        // Clean up: Reset the input field to empty after adding the todo.
        setTodo("")
    }

    return (
        /**
         * CONCEPT 5: Controlled Components
         * In React, an input is "controlled" when its value is driven by 
         * state and its changes are handled by a function.
         */
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                // Value is tied to our local 'todo' state
                value={todo}
                // onChange updates the state as the user types
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;