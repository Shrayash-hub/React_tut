import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import Contact from './Components/Contact/Contact'
import Github from './Components/Github/Github.jsx'
import User from './Components/User/User.jsx'

/**
 * CONCEPT 1: Routing Approaches
 * React Router 6.4+ introduced 'Data Routers'. 
 * There are two ways to define them:
 */

// --- FIRST WAY (Object Syntax) ---
// This uses a standard JavaScript array. It is often preferred for 
// programmatic route generation or when passing data to routes.
/*
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>, // This is the Parent Route (Root)
    children: [         // Nested Routes
      { path: "", element: <Home /> },
      { path: "AboutUs", element: <AboutUs /> },
      { path: "Contact", element: <Contact/> }
    ]
  }
])
*/

// --- SECOND WAY (JSX Syntax) ---
// This uses 'createRoutesFromElements' to let you write routes like HTML tags.
// It is functionally identical to the first way but more readable for many.
const router = createBrowserRouter(
  createRoutesFromElements(
    /**
     * CONCEPT 2: Layout/Nested Routing
     * The '/' route wraps all others. The 'Layout' component acts as a shell.
     * Inside Layout.jsx, you must use the <Outlet /> component from react-router-dom
     * to tell React where to "plug in" the child components.
     */
    <Route path='/' element={<Layout/>}>
      
      {/* Index Route: Renders at the base URL (e.g., mysite.com/) */}
      <Route path='' element={<Home/>} />
      
      {/* Static Routes: Renders at /AboutUs and /Contact */}
      <Route path='AboutUs' element={<AboutUs/>} />
      <Route path='Contact' element={<Contact/>} />
      
      /**
       * CONCEPT 3: Dynamic Routing (URL Params)
       * The ':userID' syntax makes this a dynamic segment.
       * If the URL is /User/123, the 'User' component renders.
       * You can grab "123" inside the User component using the 'useParams' hook.
       * Note: In your code, there is a space ': userID' which should be ':userID'.
       */
      <Route path='User/:userID' element={<User/>} />
      
      <Route path='Github' element={<Github/>} />
    </Route>
  )
)

/**
 * CONCEPT 4: Mounting the App
 * createRoot: The entry point for React 18+ apps.
 * RouterProvider: The component that provides the routing context to your 
 * entire application using the 'router' object defined above.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)