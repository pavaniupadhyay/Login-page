
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Signin from './pages/Signin'


function App() {
  
  
  return (
    <div className="App">
    <Routes>
 
    <Route path='/' element={<Navigate to="/Signin"/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
