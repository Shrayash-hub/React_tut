import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {useState} from 'react'

import App from './App.jsx'
import {jsx as _jsx} from "react"
function MyApp(){
  return(
    <div>
      <h1>Custom App | shrey</h1>
    </div>
  )
}

// this is not going to work because we made the customrender function to display this element 

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://google.com",
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href = 'https://google.com' target = '_blank'></a>
)

const a_variable = "Shrey Awasthi"
   
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank'},
  'click me to visit google',
  a_variable // evaluated expression
)



createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
