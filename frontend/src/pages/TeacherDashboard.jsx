import AdminNavbar from "../shared/Navbars/AdminNavbar";
import Sidebar from "../shared/Sidebar/Sidebar";
import TeacherStats from "../shared/Headers/TeacherStats";
import CreatingCourse from "../components/CreatingCourse";

const TeacherDashboard = () => {
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
