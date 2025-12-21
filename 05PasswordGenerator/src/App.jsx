import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  /**
   * CONCEPT: useState Hook
   * Purpose: To manage "state" (data that changes over time) in a React component.
   * When state updates, React re-renders the component to reflect changes in the UI.
   */
  const [length, setLength] = useState(8) // Manages the length of the password
  const [numberAllowed, setNumberAllowed] = useState(false); // Toggle for numbers
  const [charAllowed, setCharAllowed] = useState(false); // Toggle for special chars
  const [password, setPassword] = useState("") // Holds the generated password string

  /**
   * CONCEPT: useRef Hook
   * Purpose: To create a direct reference to a DOM element. 
   * Here, it's used to "grab" the input field so we can perform actions like 
   * 'select()' or 'setSelectionRange()' which aren't handled by standard React state.
   */
  const passwordref = useRef(null)

  /**
   * CONCEPT: useCallback Hook
   * Purpose: Memoization. It "caches" the function definition between re-renders.
   * Why? In React, functions are recreated on every render. If we pass this function 
   * to other hooks or components, it might cause unnecessary loops. 
   * The function only updates if the "dependencies" [length, numberAllowed, etc.] change.
   */
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[\]^_{|}"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  /**
   * Another useCallback for the Copy functionality.
   * It ensures the copy function isn't recreated unless the password changes.
   */
  const copyPasswordToclipboard = useCallback(
    ()=>{
      // Using the useRef to focus/select the text for better User Experience (UX)
      passwordref.current?.select(); 
      passwordref.current?.setSelectionRange(0, 100); // Selects up to 100 characters
      
      // Standard Browser API to write text to the user's clipboard
      window.navigator.clipboard.writeText(password)
    }, [password]
  )

  /**
   * CONCEPT: useEffect Hook
   * Purpose: Synchronization. It runs the code inside it "after" the component renders.
   * Here, it says: "Whenever the length or checkboxes change, run the passwordGenerator function."
   * It acts as the trigger to keep the password updated automatically.
   */
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-white-500 bg-gray-700'>
        <h1 className='txt-white text-center'>Password generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white mt-4">
          <input
            type="text"
            value={password} // Controlled Component: The input value is driven by React State
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref} // Linking the useRef hook to this specific DOM element
          />
          <button 
          onClick = {copyPasswordToclipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              // Updating state on user interaction
              onChange={(e) => setLength(e.target.value)} 
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              // CONCEPT: Callback in setState
              // We use (prev) => !prev to ensure we are toggling based on the 
              // most current value of the state, avoiding race conditions.
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

/*
useState:
Keeps track of the current password, its length, and which characters are selected.
useCallback:
Stores the logic of generating a password so it doesn't have to be "re-learned" by the browser on every tiny visual change.
useEffect:
The "engine" that automatically calls the generator whenever the user moves the slider or clicks a checkbox.
useRef:
Provides a "bridge" to the input box so you can select the text blue when the "Copy" button is clicked.

*/

export default App