import AdminNavbar from "../shared/Navbars/AdminNavbar";
import Sidebar from "../shared/Sidebar/Sidebar";
import HeaderStats from "../shared/Headers/HeaderStats";
import CreatingCourse from "../components/CreatingCourse";
import Settings from "../admin/Settings";


const TeacherDashboard = () => {
  return (
    <>
      <Sidebar/>
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <CreatingCourse/>
        <Settings/>
        </div>
      </div>
    </>
  );
};

export default TeacherDashboard;