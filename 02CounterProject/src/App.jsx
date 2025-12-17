// 1. IMPORTING HOOKS
// We import 'useState' from React. This is a "Hook".
// Hooks allow us to "hook into" React features like state and lifecycle methods
// inside functional components.
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // 2. DEFINING STATE
  // Syntax: const [variable, setterFunction] = useState(initialValue);
  //
  // 'count': This acts as our variable. It holds the current data (starts at 0).
  // 'setCount': This is a special function provided by React to update 'count'.
  //
  // WHY NOT JUST USE 'let count = 0'?
  // If you used a normal JS variable, the UI would never update when the number changes.
  // 'useState' tells React: "Whenever this changes, re-run this function and update the DOM."
  let [count, setCount] = useState(0)

  // 3. EVENT HANDLER (Add)
  const addValue = () =>{
    // We do NOT do: count = count + 1
    // Direct assignment won't trigger a re-render.
    // We must use the setter function (setCount) to trigger the React update cycle.
    setCount(count+1)
    
    // Note: Console logging 'count' immediately here might still show the old value
    // because React state updates are asynchronous (they happen in the next render).
  }

  // 4. EVENT HANDLER (Remove)
  const RemoveValue = () =>{
    // React allows valid JavaScript logic inside these functions.
    // You could add an if-statement here (e.g., if (count > 0)) to prevent negative numbers.
    setCount(count-1)
  }

  return (
    // 5. FRAGMENTS (<> ... </>)
    // React components can only return ONE parent element.
    // The empty tags <> and </> (Fragments) let us group elements without adding 
    // an extra <div> to the actual HTML DOM.
    <>
      {/* 6. INTERPOLATION ({ }) */}
      {/* The curly braces {} are a portal from JSX (HTML-like) back to JavaScript. */}
      {/* Any valid JS expression inside {} will be evaluated and displayed. */}
      
      {/* Because 'count' is a state variable, whenever setCount is called, 
          React automatically updates this text in all these places at once. */}
      <h1>Counter Project {count}</h1>
      <h2>Counter Value {count}</h2>

      {/* 7. BINDING EVENTS */}
      {/* We pass the function reference {addValue} to the onClick prop. */}
      {/* Note: We pass {addValue}, NOT {addValue()}. We want the function to run 
          ONLY when clicked, not when the page loads. */}
      <button onClick = {addValue}>Add Value {count}</button>
      <br />
      <button onClick = {RemoveValue}>Remove Value {count}</button>
      
      {/* This demonstrates the "Single Source of Truth." 
          One variable controls the header, button text, and footer simultaneously. */}
      <p>footer: {count}</p>
    </>
  )
}

export default App