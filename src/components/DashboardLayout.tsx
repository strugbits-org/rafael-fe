import { Outlet } from "react-router-dom";

import { Flex } from "antd";
import Aside from "./Aside";
import Navbar from "./Navbar";
import { Box } from "./ui/box";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className=" dark:bg-[#1f1f1f]  bg-slate-200">
      <Flex align="center" className="h-full">
        <Aside />
        <Flex vertical className="pt-4 h-screen flex-1 px-2">
          <Box className="xl:w-full h-full  w-[85vw] sm:w-[90vw] md:w-[92vw] lg:w-[94vw]  overflow-hidden ">
            <Box className="px-4">
              <Navbar />
            </Box>
            <Box
              style={{ height: "calc(100vh - 110px)" }}
              className={`overflow-y-auto overflow-x-hidden mt-2 pr-4 sm:pr-2 pl-4`}
            >
              {children || <Outlet />}
            </Box>
          </Box>
        </Flex>
      </Flex>
    </main>
  );
};

export default DashboardLayout;
