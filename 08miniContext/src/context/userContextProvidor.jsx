import React from 'react'
import UserContext from './Usercontext'

/**
 * CONCEPT 1: The Provider Component
 * A Provider is a component that wraps around your application (or a part of it).
 * Its job is to manage the state and provide that state to all its children.
 * * CONCEPT 2: {children} Prop
 * 'children' is a special React prop. It represents all the components you 
 * wrap inside <UserContextProvider> in App.jsx (like <Login /> and <Profile />).
 * Without this, the wrapped components would never render.
 */
const UserContextProvider = ({children}) =>{
    
    /**
     * CONCEPT 3: Defining Global State
     * We use useState here because we want the data (the 'user' object) to be 
     * reactive. When 'setUser' is called from anywhere in the app, this state 
     * updates, and every component "listening" to this context will re-render.
     */
    const [user, setUser] = React.useState(null)

    return (
        /**
         * CONCEPT 4: Providing the "Value"
         * The 'value' prop is the most important part. Whatever you pass here 
         * (an object containing 'user' and 'setUser') is what other components 
         * will receive when they use the 'useContext' hook.
         * * We pass 'setUser' as well so that children components like <Login /> 
         * have the power to update the global user state.
         */
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;