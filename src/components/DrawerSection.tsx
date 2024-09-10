import React from "react";
import { Drawer, Flex } from "antd";
import { Link, useLocation } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiConfettiLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { sidebarList } from "../data";

interface DrawerProps {
  onClose: () => void;
  open: boolean;
}
const DrawerSection: React.FC<DrawerProps> = ({ onClose, open }) => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const renderIcon = (iconName: string, isActive: boolean) => {
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
        return (
          <MdOutlineNotificationsActive
            size={24}
            fill={isActive ? "#fff" : "gray"}
          />
        );
      case "updates":
        return <PiConfettiLight size={24} fill={isActive ? "#fff" : "gray"} />;

      default:
        return null;
    }
  };

  return (
    <Drawer
      placement="left"
      title=""
      closeIcon={false}
      onClose={onClose}
      open={open}
      style={{
        backgroundColor: "#292929",
      }}
    >
      <Flex gap={12} align="center" className="py-8 px-4 bg-secondary-100">
        <RxHamburgerMenu
          size={28}
          onClick={onClose}
          className="cursor-pointer"
        />
      </Flex>
      <Flex
        vertical
        justify="space-between"
        className="bg-secondary-100"
        gap={12}
      >
        {sidebarList?.map((value, index) => {
          let isActive = currentPathname === value.route;

          const IconComponent = renderIcon(value?.icon, isActive);

          return (
            <Link
              key={index}
              to={value.route}
              className={`  rounded-md flex gap-3 items-center p-2 py-1.5    justify-start text-zinc-500 ${
                isActive ? "bg-primary-100 text-white" : ""
              }`}
            >
              {IconComponent}
              <p className="font-semibold">{value.label}</p>
            </Link>
          );
        })}
      </Flex>
    </Drawer>
  );
};

export default DrawerSection;
