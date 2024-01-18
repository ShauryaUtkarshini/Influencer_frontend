import { Route,Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {analytics} from '../src/Utility/Index'
import {logEvent} from 'firebase/analytics'
import Chat from "./pages/Chat"


function App() {
  if (analytics) {
    logEvent(analytics, 'Init...')
  }
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/chat" element={<Chat/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
