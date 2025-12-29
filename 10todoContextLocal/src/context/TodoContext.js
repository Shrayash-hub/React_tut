import { createContext, useContext } from 'react'

/**
 * CONCEPT 1: createContext()
 * This function creates the actual Context object. 
 * We provide an object inside it to define the "default values" or the 
 * "structure" of the data our app will use.
 */
export const TodoContext = createContext({
    // todos: An array that will hold our todo objects
    todos: [
        {
            id: 1,
            todo: " Todo msg ",
            completed: false,
        }
    ],
    /**
     * CONCEPT 2: Function Shells
     * We define the names of the functions (addTodo, updateTodo, etc.) here 
     * but leave them empty. Their actual logic will be written in App.jsx. 
     * Including them here helps with code autocompletion (IntelliSense) 
     * throughout the rest of your project.
     */
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

/**
 * CONCEPT 3: Custom Hook (useTodo)
 * Instead of importing 'useContext' and 'TodoContext' separately in every 
 * single file, we create a custom hook 'useTodo'.
 * Now, components can simply call 'useTodo()' to get access to all 
 * todos and functions.
 */
export const useTodo = () => {
    return useContext(TodoContext)
}

/**
 * CONCEPT 4: Context Provider
 * The 'Provider' is a component that wraps your app and "provides" the values.
 * By exporting it as 'Todoprovider', we make the syntax cleaner in App.jsx:
 * <Todoprovider value={...}> ... </Todoprovider>
 */
export const Todoprovider = TodoContext.Provider