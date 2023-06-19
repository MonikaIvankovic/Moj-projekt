import { Outlet } from "react-router-dom";
import Header from "./header";
import SideBar from "./sidebar";
import { useEffect, useState } from "react";
const Layout = () => {
  const [sidebarIsOpen, setsidebarIsOpen] = useState<boolean>(false);
  useEffect(() => {
    console.log(sidebarIsOpen);
  }, [sidebarIsOpen]);
  return (
    <>
      <Header
        toggleSidebar={() => {
          setsidebarIsOpen(!sidebarIsOpen);
        }}
      />
      <Outlet />
      <SideBar onClose={() => setsidebarIsOpen(false)} isOpen={sidebarIsOpen} />
    </>
  );
};
export default Layout;
