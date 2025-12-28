import React, {useState, useContext} from 'react'
import UserContext from '../context/Usercontext'

function Login(){
    /**
     * CONCEPT 1: Local State vs. Global Context
     * We use local 'useState' for the input fields because the rest of the 
     * app doesn't need to know what the user is typing character-by-character.
     * We only move this data to the Global Context once the 'Submit' button is clicked.
     */
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    /**
     * CONCEPT 2: The useContext Hook (The Consumer)
     * This hook allows the component to "subscribe" to the UserContext.
     * We are destructuring 'setUser' from the context value. 
     * This gives this component the power to change the global state defined in the Provider.
     */
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) =>{
        /**
         * CONCEPT 3: Handling Form Submission
         * e.preventDefault(): Prevents the browser from reloading the page,
         * which is essential for maintaining state in a Single Page Application.
         */
        e.preventDefault()

        /**
         * CONCEPT 4: Pushing Data to Context
         * By calling setUser, we send the local 'username' and 'password' 
         * up to the UserContextProvider. This will trigger a re-render in 
         * any other component (like Profile.jsx) that is listening to 'user'.
         */
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            {/**
             * CONCEPT 5: Controlled Components
             * The input's 'value' is driven by React state, and 'onChange' 
             * updates that state. This ensures React is the "single source of truth."
             */}
            <input type='text' 
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='username'/>
            {"  "}
            <input type='password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder='password'/>
            
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login