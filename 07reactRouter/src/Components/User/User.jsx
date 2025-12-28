import React from 'react'
/**
 * CONCEPT 1: Hooks in React Router
 * 'useParams' is a built-in hook provided by react-router-dom.
 * Hooks are functions that let you "hook into" React state and lifecycle features.
 */
import { useParams } from 'react-router-dom'

function User() {
    /**
     * CONCEPT 2: Extracting URL Parameters
     * The useParams hook returns an object of key/value pairs of the dynamic 
     * params from the current URL that were matched by the <Route path>.
     * * In your main router file, you defined: path='User/:userID'
     * The key here is 'userID'. 
     * * Destructuring: const { userID } = useParams() 
     * This extracts the value directly. If the URL is /User/hitesh, 
     * the variable userID will now hold the string "hitesh".
     */
    const { userID } = useParams()

    return (
        /**
         * CONCEPT 3: Dynamic UI Rendering
         * Because 'userID' is now a standard JavaScript variable, we wrap it in 
         * curly braces {userID} to display it inside our JSX.
         * * Styling Note: You are using Tailwind CSS classes here (bg-grey-600, etc.)
         * to style the output based on the data received from the URL.
         */
        <div className='bg-gray-600 text-white text-3xl p-4'>
            User: {userID}
        </div>
    )
}

export default User