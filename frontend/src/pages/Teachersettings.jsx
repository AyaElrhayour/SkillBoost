import Sidebar from "../shared/Sidebar/Sidebar";
import AdminNavbar from "../shared/Navbars/AdminNavbar";
import Settings from "../admin/Settings";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Teachersettings = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <Sidebar />
      <div className=" md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <div className="px-4 md:px-10 mx-auto w-full m-24">
          <Settings />
        </div>
      </div>
    </>
  );
};
export default Teachersettings;
