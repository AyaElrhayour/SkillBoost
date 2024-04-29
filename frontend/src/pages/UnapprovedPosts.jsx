import Sidebar from "../shared/Sidebar/Sidebar";
import AdminNavbar from "../shared/Navbars/AdminNavbar";

const UnapprovedPosts = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />

        <div className="flex flex-col gap-6 mx-16 bg-lightBlue-600 md:pt-32  pt-12"></div>
      </div>
    </>
  );
};

export default UnapprovedPosts;
