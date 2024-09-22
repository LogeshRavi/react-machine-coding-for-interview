import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Blog from './Components/Blog'
import Navbar from './Pages/Navbar'
import {ThemeProvider} from './Theme-context'

function App() {


  return (
    <ThemeProvider>
   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>
   </Routes>
   </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
