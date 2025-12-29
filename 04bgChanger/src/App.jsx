import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className = "w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-weap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick = {()=> setColor("red")}
          className="outline-non px-4 py-1 rounded-full text-while shawdow-lg" style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick = {()=> setColor("green")}
          className="outline-non px-4 py-1 rounded-full text-while shawdow-lg" style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick = {()=> setColor("blue")}
          className="outline-non px-4 py-1 rounded-full text-while shawdow-lg" style={{backgroundColor: "blue"}}
          >Blue</button>

          <button
          onClick = {()=> setColor("purple")}
          className="outline-non px-4 py-1 rounded-full text-while shawdow-lg" style={{backgroundColor: "purple"}}
          >Purple</button>

          <button
          onClick = {()=> setColor("yellow")}
          className="outline-non px-4 py-1 rounded-full text-while shawdow-lg" style={{backgroundColor: "yellow"}}
          >Yellow</button>
        </div>
      </div>

    </div>
  )
}

export default App
