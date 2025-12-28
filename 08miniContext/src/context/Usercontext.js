import React from 'react'

/**
 * CONCEPT: Creating the Context Object
 * * 1. What is createContext()?
 * - It is a function that creates a Context object. 
 * - Think of it as creating a "Global Variable Container" that can be 
 * accessed by any component in your app, no matter how deep it is.
 * * 2. Why use this?
 * - To avoid "Prop Drilling" (passing data through 5-6 layers of components 
 * that don't actually need the data just to reach a child component).
 * * 3. The Result:
 * - When you call React.createContext(), it returns an object with two components:
 * a) Provider: The one that "gives" or "broadcasts" the data.
 * b) Consumer: The one that "asks" or "listens" for the data (modern React 
 * uses the 'useContext' hook instead of the Consumer component).
 */
const UserContext = React.createContext()

/**
 * We export it so that:
 * - The 'Provider' file can import it to wrap the application.
 * - The 'Consumer' files (Login, Profile) can import it to extract the data.
 */
export default UserContext;