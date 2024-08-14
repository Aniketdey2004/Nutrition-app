import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Track from './components/Track'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/Track' element={<Track/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
