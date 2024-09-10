import { Box } from "./ui/box";
import { Flex } from "antd";
import { sidebarList } from "../data";
import { Link, useLocation } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { PiConfettiLight } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import DrawerSection from "./DrawerSection";

const Aside: React.FC = () => {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const renderIcon = (iconName: string, isActive: boolean) => {
    switch (iconName) {
      case "dashboard":
        return <GoHome size={24} fill={isActive ? "#2f88ff" : "gray"} />;
      case "agenda":
        return (
          <IoDocumentTextOutline
            size={24}
            stroke={isActive ? "#2f88ff" : "gray"}
          />
        );
      case "reminders":
        return (
          <MdOutlineNotificationsActive
            size={24}
            fill={isActive ? "#2f88ff" : "gray"}
          />
        );
      case "updates":
        return (
          <PiConfettiLight size={24} fill={isActive ? "#2f88ff" : "gray"} />
        );

      default:
        return null;
    }
  };
  return (
    <>
      <Box className="w-[64px] h-screen sticky py-4 bg-secondary-100">
        <Flex
          gap={24}
          align="center"
          justify="center"
          className="py-6 bg-secondary-100"
        >
          <RxHamburgerMenu
            size={24}
            onClick={showDrawer}
            className="cursor-pointer"
          />
        </Flex>
        <Flex
          vertical
          justify="space-between"
          className="bg-secondary-100"
          gap={24}
        >
          {sidebarList?.map((value, index) => {
            let isActive = currentPathname === value.route;

            const IconComponent = renderIcon(value?.icon, isActive);

            return (
              <Link
                key={index}
                to={value.route}
                className={` bg-secondary-100 flex items-center p-2 py-1.5   justify-center text-white ${
                  isActive
                    ? "border-l-2  border-primary-100"
                    : "border-l-2 border-transparent"
                }`}
              >
                {IconComponent}
              </Link>
            );
          })}
        </Flex>
      </Box>

      <DrawerSection onClose={onClose} open={open} />
    </>
  );
};

export default Aside;
