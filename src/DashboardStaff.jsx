import { Outlet } from "react-router-dom";
import "./App.css";

import SidebarStaff from "./components/SideBarStaff";

function DashboardStaff() {
  return (
    <>
      <div className="flex min-h-screen ">
        {/* Sidebar bên trái */}
        <SidebarStaff />

        {/* Nội dung trang con (Outlet) bên phải */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashboardStaff;
