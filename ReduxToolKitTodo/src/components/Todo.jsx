import React from 'react'
/**
 * CONCEPT 1: useSelector Hook
 * This hook allows you to extract data from the Redux store state.
 * It also subscribes your component to the store, so it re-renders 
 * automatically whenever the selected data changes.
 */
import { useSelector, useDispatch } from 'react-redux'

/**
 * CONCEPT 2: Importing Action Creators
 * We import 'removeTodo' from our slice to signal to the store 
 * that we want to delete a specific item.
 */
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    /**
     * CONCEPT 3: Accessing Global State
     * The callback (state => state.todos) selects the 'todos' array 
     * from our global state tree.
     */
    const todos = useSelector(state => state.todos)

    /**
     * CONCEPT 4: useDispatch Hook
     * Returns a reference to the dispatch function. We use this 
     * to send the 'removeTodo' action to the store.
     */
    const dispatch = useDispatch()

  return (
    <>
    <div>Todos</div>
    <ul className="list-none">
        {/**
         * CONCEPT 5: List Rendering
         * We map through the 'todos' array to create a <li> for each item.
         * The 'key' attribute (todo.id) is essential for React to 
         * efficiently track which items change or are removed.
         */}
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            
            {/**
             * CONCEPT 6: Triggering an Action
             * When the button is clicked, we dispatch 'removeTodo' 
             * and pass the specific 'todo.id' as the payload.
             */}
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              {/* Trash Icon SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos