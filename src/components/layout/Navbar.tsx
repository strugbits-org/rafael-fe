// Navbar.tsx
import { Flex, Switch } from "antd";

import { FaShareSquare } from "react-icons/fa";
import state from "../../store/store";
import { Box } from "../ui/box";
import Paragraph from "../common/Paragraph";

const Navbar = () => {
  const onChange = (checked: boolean) => {
    state.darkMode = checked;
  };

  return (
    <Flex align="center" justify="space-between" gap={6}>
      <h1 className="font-bold dark:text-white font-segoe text-black text-lg">
        Meeting Title
      </h1>
      <Box>
        <Flex align="center" gap={8}>
          <Box className="py-[3px]   text-[12px] md:text-[12px]  px-2 outline-[1px] border-zinc-600 rounded-sm dark:bg-secondary-100 bg-slate-300">
            <Paragraph className="text-center dark:text-white text-black font-semibold">
              3
            </Paragraph>
          </Box>
          <Box className="py-[3px]  text-[12px] md:text-[12px] px-2 outline-[1px] border-zinc-600 rounded-sm dark:bg-secondary-100 bg-slate-300">
            <Paragraph className="text-center dark:text-white text-black font-semibold">
              1
            </Paragraph>
          </Box>
          <span className="font-bold  text-[12px] md:text-[12px] font-segoe dark:text-white text-black">
            :
          </span>
          <Box className="py-[3px]  text-[12px] md:text-[12px] px-2 outline-[1px] border-zinc-600 rounded-sm dark:bg-secondary-100 bg-slate-300">
            <Paragraph className="text-center dark:text-white text-black font-semibold">
              4
            </Paragraph>
          </Box>
          <Box className="py-[3px]  text-[12px] md:text-[12px] px-2 outline-[1px] border-zinc-600 rounded-sm dark:bg-secondary-100 bg-slate-300">
            <Paragraph className="text-center dark:text-white text-black font-semibold">
              2
            </Paragraph>
          </Box>
          <button
            className="rounded-md font-segoe dark:text-white text-black dark:bg-[#3A3A3A] bg-slate-300 border-[1px] dark:border-zinc-600 hover:text-black border-red-50 hover:bg-primary-100 text-[12px] md:text-[14px] flex gap-2 items-center px-3 py-1"

            // color="#fff"
          >
            <FaShareSquare />
            <span className="sm:block hidden">Share invite</span>
          </button>
          {/* Toggle Switch for dark mode */}
          <Switch
            className="md:block hidden"
            defaultChecked={state.darkMode}
            onChange={onChange}
          />
        </Flex>
        <Paragraph className="text-xs dark:text-white text-black">
          Meeting duration
        </Paragraph>
      </Box>
    </Flex>
  );
};

export default Navbar;
