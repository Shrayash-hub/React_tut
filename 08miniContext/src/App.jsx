import UserContextProvider from './context/userContextProvidor'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
function App() {
  

  return (
    <UserContextProvider>
      <h1>react Devlopment : Context Api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
