import Sidebar from "../shared/Sidebar/Sidebar";
import AdminNavbar from "../shared/Navbars/AdminNavbar";
import HeaderStats from "../shared/Headers/HeaderStats";
import CreatingCourse from "../components/CreatingCourse";
import Settings from "../admin/Settings";
const Teachersettings = () =>{
  return(
    <>
    <Sidebar/>
    <div className=" md:ml-64 bg-blueGray-100">
      <AdminNavbar />
      
      
      <div className="px-4 md:px-10 mx-auto w-full m-24">
      
      
      <Settings/>
      </div>
    </div>
  </>
  )
}
export default Teachersettings;