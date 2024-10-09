// Navbar.tsx
import { Flex, message, Switch } from "antd";

import { FaShareSquare } from "react-icons/fa";
import state from "../../store/store";
import { Box } from "../ui/box";
import Paragraph from "../common/Paragraph";

const Navbar = () => {
  const onChange = (checked: boolean) => {
    state.darkMode = checked;
  };

  const copyUrlToClipboard = async () => {
    try {
      const urlToCopy = window.location.href;
      await navigator.clipboard.writeText(urlToCopy);
      message.success("Copied to clipboard.");
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Flex
      align="start"
      justify="space-between"
      className="xl:pt-3 sm:pt-[18px] pt-[20px] pb-2"
      gap={6}
    >
      <h1 className="font-bold dark:text-white font-segoe text-black xl:text-[28px] md:text-[22px] text-[18px]">
        Meeting Title
      </h1>
      <Box>
        <Flex align="start" className="lg:gap-3 gap-1">
          <Flex className="lg:gap-3 gap-1">
            <Box className="py-[3px]   text-[12px] md:text-[14px]  px-2 outline-[1px] border-zinc-600 rounded-sm dark:bg-secondary-100 bg-slate-300">
              <Paragraph className="text-center dark:text-white text-black font-semibold">
                3
              </Paragraph>
            </Box>
            <Box className="py-[3px]  text-[12px] md:text-[14px] px-2 outline-[1px] border-zinc-600 rounded-sm dark:bg-secondary-100 bg-slate-300">
              <Paragraph className="text-center dark:text-white text-black font-semibold">
                1
              </Paragraph>
            </Box>
            <span className="font-bold  text-[12px] md:text-[14px] font-segoe dark:text-white text-black">
              :
            </span>
            <Box className="py-[3px]  text-[12px] md:text-[14px] px-2 outline-[1px] border-zinc-600 rounded-sm dark:bg-secondary-100 bg-slate-300">
              <Paragraph className="text-center dark:text-white text-black font-semibold">
                4
              </Paragraph>
            </Box>
            <Box className="py-[3px]  text-[12px] md:text-[14px] px-2 outline-[1px] border-zinc-600 rounded-sm dark:bg-secondary-100 bg-slate-300">
              <Paragraph className="text-center dark:text-white text-black font-semibold">
                2
              </Paragraph>
            </Box>
          </Flex>
          <button
            onClick={copyUrlToClipboard}
            className="rounded-md font-segoe dark:text-white text-black dark:bg-[#3A3A3A] bg-slate-300 border-[1px] dark:border-zinc-600 hover:text-black border-red-50 hover:bg-primary-100 dark:hover:bg-primary-100 text-[12px] md:text-[14px] flex gap-2 items-center px-3 py-1"

            // color="#fff"
          >
            <FaShareSquare />
            <span className="sm:block hidden">Share invite</span>
          </button>

          {/* Toggle Switch for dark mode */}
          <Flex
            className="md:flex hidden gap-y-1"
            justify="center"
            align="center"
            vertical
          >
            <Switch defaultChecked={state.darkMode} onChange={onChange} />
            <Paragraph className="text-[10px] dark:text-white text-black">
              {state.darkMode ? "Dark Mode" : "Light Mode"}
            </Paragraph>
          </Flex>
        </Flex>
        <Paragraph className="text-xs sm:mt-[-10px] mt-1  dark:text-white text-black">
          Meeting duration
        </Paragraph>
      </Box>
    </Flex>
  );
};

export default Navbar;
