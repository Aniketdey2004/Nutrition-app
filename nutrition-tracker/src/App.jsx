import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Track from './components/Track'
import Private from './components/Private'
import { UserContext } from './contexts/UserContext'
import { useState } from "react"
import Diet from './components/Diet'
function App() {
  const [loggedUser,setLoggedUser]=useState(JSON.parse(localStorage.getItem("nutrify-user")));

  return (
    <>
      <UserContext.Provider value={{loggedUser,setLoggedUser}}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/track' element={<Private component={Track} />} />
            <Route path='/track' element={<Private component={<Diet/>} />} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter> 
      </UserContext.Provider>
    </>
  )
}

export default App
