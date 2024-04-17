import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element={<Home />}/>
      {/* <Route path="/blog" element={<Blog />}/> */}
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
