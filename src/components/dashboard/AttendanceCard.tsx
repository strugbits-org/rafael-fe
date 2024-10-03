import { Box } from "../ui/box";
import { Flex } from "antd";
import SemiGuage from "../chart/SemiGuage";
import Paragraph from "../common/Paragraph";

const AttendanceCard = () => {
  return (
    <Box className="dark:bg-[#1f1f1f]  bg-slate-200 rounded-[12px] py-5 px-10 h-full ">
      {/* Stats */}
      <Flex justify="space-between" className="flex-col sm:flex-row gap-y-2">
        {/* invited */}
        <Flex vertical align="center">
          <Paragraph className="dark:text-white text-black  text-lg font-semibold">
            10
          </Paragraph>
          <Paragraph className="dark:text-white text-black text-xs">
            Invited
          </Paragraph>
        </Flex>
        {/* accepted */}
        <Flex vertical align="center">
          <Paragraph className="dark:text-white text-black text-lg font-semibold ">
            6
          </Paragraph>
          <Paragraph className="dark:text-white text-black text-xs">
            Accepted
          </Paragraph>
        </Flex>
        {/* tentative */}
        <Flex vertical align="center">
          <Paragraph className="dark:text-white text-black text-lg font-semibold ">
            4
          </Paragraph>
          <Paragraph className="dark:text-white text-black text-xs">
            Tentative
          </Paragraph>
        </Flex>
        {/* decline */}
        <Flex vertical align="center">
          <Paragraph className="dark:text-white text-black text-lg font-semibold ">
            2
          </Paragraph>
          <Paragraph className="dark:text-white text-black text-xs">
            Decline
          </Paragraph>
        </Flex>
      </Flex>

      <Box className=" mt-4">
        <SemiGuage />
      </Box>
    </Box>
  );
};

export default AttendanceCard;
