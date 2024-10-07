import { Flex } from "antd";

import { Link, useLocation } from "react-router-dom";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { MdOutlineCelebration } from "react-icons/md";

import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Box } from "../ui/box";
import { sidebarList } from "../../data";
import DrawerSection from "../ui/DrawerSection";
import NotificationIcon from "../../assets/icons/notification";

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
    // ICONS RENDERER
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
        return <NotificationIcon color={isActive ? "#2f88ff" : "gray"} />;
      case "updates":
        return (
          <MdOutlineCelebration
            size={24}
            fill={isActive ? "#2f88ff" : "gray"}
          />
        );

      default:
        return null;
    }
  };
  return (
    <>
      <Box className="w-[10vw] md:w-[64px] h-screen sticky py-4 dark:bg-[#1f1f1f]  bg-slate-200">
        {/* HAMBURGER MENU */}
        <Flex
          gap={24}
          align="center"
          justify="center"
          className="py-6 dark:bg-[#1f1f1f]  bg-slate-200"
        >
          <RxHamburgerMenu
            size={24}
            onClick={showDrawer}
            className="cursor-pointer dark:text-white text-black"
          />
        </Flex>

        {/* LINKS */}
        <Flex
          vertical
          justify="space-between"
          className="dark:bg-[#1f1f1f]  bg-slate-200"
          gap={24}
        >
          {sidebarList?.map((value, index) => {
            const isActive = currentPathname === value.route;

            const IconComponent = renderIcon(value?.icon, isActive);

            return (
              <Link
                key={index}
                to={value.route}
                className={` flex items-center p-2 py-1.5   justify-center dark:text-white text-black ${
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

      {/* DRAWER */}
      <DrawerSection onClose={onClose} open={open} />
    </>
  );
};

export default Aside;
