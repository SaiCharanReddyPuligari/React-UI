import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    <UserContextProvider>
    <h1>Context API</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}
//providing the Context API to out main App element

export default App
