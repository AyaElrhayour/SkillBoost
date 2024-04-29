import AdminNavbar from "../shared/Navbars/AdminNavbar";
import Sidebar from "../shared/Sidebar/Sidebar";
import TeacherStats from "../shared/Headers/TeacherStats";
import CreatingCourse from "../components/CreatingCourse";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Cookies.get("role") != "Teacher") {
      navigate("/blog");
    }
  }, []);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <TeacherStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <CreatingCourse />
        </div>
      </div>
    </>
  );
};

export default TeacherDashboard;
