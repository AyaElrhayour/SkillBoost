import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { store } from "./app/store"; // Import your Redux store
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import TeacherDashboard from "./pages/TeacherDashboard";
import Teachersettings from "./pages/Teachersettings";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminDashboard from "./pages/AdminDashboard";
import CourseChapters from "./pages/CourseChpaters";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/teacherDashboard" element={<TeacherDashboard />} />
            <Route path="/teacher/settings" element={<Teachersettings />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/chapters/:id" element={<CourseChapters />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
