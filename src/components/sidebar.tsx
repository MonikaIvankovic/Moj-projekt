import { NavLink } from "react-router-dom";

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};
type LinkType = {
  path: string;
  label: string;
};
const linkList: LinkType[] = [
  {
    path: "/progress-bar",
    label: "Progress bar",
  },
  {
    path: "/loader",
    label: "Loader",
  },
];
const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  return (
    <>
      <div className={` "sidebar" ${isOpen ? "isActive" : ""}`}>Sidebar</div>
      {linkList.map((link) => {
        return (
          <NavLink
            key={link.path}
            onClick={onClose}
            to="progress-bar"
            className="sidebar"
          >
            Progress bar
          </NavLink>
        );
      })}
    </>
  );
};

export default SideBar;
