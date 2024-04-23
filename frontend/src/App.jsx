import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import TeacherDashboard from './pages/TeacherDashboard';
import Teachersettings from './pages/Teachersettings';

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element={<Home />}/>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/courses" element={<Courses />}/>
      <Route path='/teacherDashboard' element={<TeacherDashboard/>}/>
      <Route path='/teacher/settings' element={<Teachersettings/>}/>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
