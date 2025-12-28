import React, {useContext} from 'react'
import UserContext from '../context/Usercontext'

function Profile(){
    /**
     * CONCEPT 1: Consuming Context (The Reader)
     * We use the 'useContext' hook and pass our 'UserContext' object into it.
     * This allows us to "extract" the data currently stored in the Provider.
     * Here, we only destructure 'user' because this component doesn't need 
     * to change the data, only display it.
     */
    const {user} = useContext(UserContext)
    
    /**
     * CONCEPT 2: Conditional Rendering
     * Since the initial state in our Provider is 'null', we must handle the 
     * case where a user hasn't logged in yet.
     * * If 'user' is null or undefined, we return the "Please Login" message.
     * * This prevents the app from crashing when trying to read 'user.username'.
     */
    if(!user) return <div>Please Login</div>

    /**
     * CONCEPT 3: Dynamic Data Display
     * Once 'user' contains data (after Login.jsx calls setUser), React 
     * automatically re-renders this component.
     * We now have access to the object properties like 'username' that 
     * were passed up from the Login form.
     */
    return <div>Welcome {user.username}</div>
}

export default Profile;