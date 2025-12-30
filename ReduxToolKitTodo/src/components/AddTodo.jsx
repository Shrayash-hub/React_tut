import React,{useState} from 'react'
/**
 * CONCEPT 1: useDispatch Hook
 * This hook returns a reference to the 'dispatch' function from the Redux store.
 * You use it to "send" actions (like addTodo) to the store.
 */
import {useDispatch} from 'react-redux'

/**
 * CONCEPT 2: Importing Action Creators
 * We import 'addTodo' from our slice. This is an automatically generated 
 * function that formats the data into a standard Redux action object.
 */
import {addTodo} from '../features/todo/todoSlice'

function AddTodo(){
    /**
     * CONCEPT 3: Local vs Global State
     * We use local 'useState' to track the input field as the user types.
     * This keeps the component fast and prevents the global Redux store 
     * from updating on every single keystroke.
     */
    const [input, setInput] = useState('')
    
    // Initializing the dispatcher
    const dispatch = useDispatch()

    /**
     * CONCEPT 4: Action Dispatching
     * This handler bridges the gap between the UI and the Redux store.
     */
    const addTodoHandler = (e) => {
        // Prevents the browser from reloading the page on form submission
        e.preventDefault()

        /**
         * CONCEPT 5: Payload Sending
         * We call 'dispatch' and pass the 'addTodo' action creator.
         * The object {text: input} becomes the 'action.payload' that 
         * the reducer receives in todoSlice.js.
         */
        dispatch(addTodo({text: input}))

        // Reset the input field after the todo is added
        setInput('')
    }

    return(
        /**
         * CONCEPT 6: Form Event Handling
         * Using 'onSubmit' on the form is better for accessibility than 
         * 'onClick' on the button, as it allows the user to press 'Enter'.
         */
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                // Controlled Component: Value and onChange are tied to local state
                value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}
export default AddTodo;