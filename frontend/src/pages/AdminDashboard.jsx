import AdminNavbar from "../shared/Navbars/AdminNavbar";
import Sidebar from "../shared/Sidebar/Sidebar";
import AdminStats from "../shared/Headers/AdminStats";
import CardTable from "../shared/Cards/CardTable";

const AdminDashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <AdminStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <CardTable />
        </div>
      </div>
    </>
  );
};
export default AdminDashboard;
