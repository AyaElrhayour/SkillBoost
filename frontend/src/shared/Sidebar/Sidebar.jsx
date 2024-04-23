
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/dashlogo.png";
import NotificationDropdown from "../Dropdowns/NotificationDropdown";
import UserDropdown from "../Dropdowns/UserDropdown";
import Dashicon from "../../assets/dashicon.png";
import seticon from "../../assets/seticon.png";
import courseicon from "../../assets/courseicon.png";



export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-[#001D6E] flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 gap-16 flex flex-wrap items-center justify-between w-full mx-auto">
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
           <img src={Logo} alt="" />
          </Link>


          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ml-4 " +
              collapseShow
            }
          >


            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex text-white flex-col list-none gap-4">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold flex items-center gap-4 " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/teacherDashboard"
                >
                  <img src={Dashicon} alt="" />
                  Dashboard
                </Link>
              </li>

              <li className="items-center">
                <a
                  className={
                    "text-xs uppercase py-3 font-bold flex items-center gap-4 " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  href="#courses"
                >
                  <img src={courseicon} alt="" />
                  Courses
                </a>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold flex items-center gap-2 " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/teacher/settings"
                >
                  <img src={seticon} alt="" />
                  Settings
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
