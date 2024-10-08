import { Drawer, Flex } from "antd";
import { Link, useLocation } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";

import { RxHamburgerMenu } from "react-icons/rx";
import { sidebarList } from "../../data";
import { useSnapshot } from "valtio";
import state from "../../store/store";
import NotificationIcon from "../../assets/icons/notification";
import CelebrationIcon from "../../assets/icons/celebration";
import ThemeToggleSwitch from "./ThemeToggleSwitch";

interface DrawerProps {
  onClose: () => void;
  open: boolean;
}
const DrawerSection: React.FC<DrawerProps> = ({ onClose, open }) => {
  // DRAWER SECTION

  const location = useLocation();
  const currentPathname = location.pathname;

  const renderIcon = (iconName: string, isActive: boolean) => {
    // ICONS RENDERER
    switch (iconName) {
      case "dashboard":
        return <GoHome size={24} fill={isActive ? "#fff" : "gray"} />;
      case "agenda":
        return (
          <IoDocumentTextOutline
            size={24}
            stroke={isActive ? "#fff" : "gray"}
          />
        );
      case "reminders":
        return <NotificationIcon color={isActive ? "#fff" : "gray"} />;
      case "updates":
        return <CelebrationIcon color={isActive ? "#fff" : "gray"} />;

      default:
        return null;
    }
  };
  const snap = useSnapshot(state);

  return (
    <Drawer
      placement="left"
      title=""
      closeIcon={false}
      onClose={onClose}
      open={open}
      className="bg-blue-400"
      style={{
        backgroundColor: snap.darkMode ? "#1f1f1f" : "#e2e8f0",
      }}
    >
      <Flex
        gap={12}
        align="center"
        className="py-8 px-4 dark:bg-[#1f1f1f]  bg-slate-200"
      >
        <RxHamburgerMenu
          size={28}
          onClick={onClose}
          className="cursor-pointer dark:text-white text-black"
        />
      </Flex>
      <Flex
        vertical
        justify="space-between"
        className="dark:bg-[#1f1f1f]  bg-slate-200"
        gap={12}
      >
        {sidebarList?.map((value, index) => {
          const isActive = currentPathname === value.route;

          const IconComponent = renderIcon(value?.icon, isActive);

          return (
            <Link
              key={index}
              to={value.route}
              className={`  rounded-md flex gap-3 items-center p-2 py-1.5   text-black font-segoe  justify-start  ${
                isActive
                  ? "bg-primary-100  font-bold text-white"
                  : "dark:text-[#8a8a8a] font-[200]"
              }`}
            >
              {IconComponent}
              <p className="font-semibold">{value.label}</p>
            </Link>
          );
        })}
      </Flex>

      <div className=" mt-4 pl-2 md:hidden flex">
        <ThemeToggleSwitch />
      </div>
    </Drawer>
  );
};

export default DrawerSection;
