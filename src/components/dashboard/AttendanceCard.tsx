import { Box } from "../ui/box";
import { Flex } from "antd";
import SemiGuage from "../chart/SemiGuage";
import Paragraph from "../common/Paragraph";
import { AttendanceCardData } from "../../data/DashboardData";

const AttendanceCard = () => {
  return (
    <Flex
      vertical
      justify="space-between"
      className="dark:bg-[#1f1f1f]  bg-slate-200 rounded-[12px] py-5 2xl:px-4 px-4 h-full "
    >
      {/* Stats */}
      <Flex
        justify="space-between"
        className="flex-col sm:flex-row gap-y-4  lg:flex-col xl:flex-row xl:flex-wrap gap-2 "
      >
        <Flex className="gap-2 flex-1 justify-around">
          {/* invited */}
          <Flex vertical align="center">
            <Paragraph className="dark:text-white text-black  text-[12px] 2xl:text-[18px] font-semibold">
              {AttendanceCardData.invited}
            </Paragraph>
            <Paragraph className="dark:text-white text-black text-xs">
              Invited
            </Paragraph>
          </Flex>
          {/* accepted */}
          <Flex vertical align="center">
            <Paragraph className="dark:text-white text-black text-[12px] 2xl:text-[18px] font-semibold ">
              {AttendanceCardData.accepted}
            </Paragraph>
            <Paragraph className="dark:text-white text-black text-xs">
              Accepted
            </Paragraph>
          </Flex>
        </Flex>

        <Flex className="gap-2 flex-1 justify-around">
          {/* tentative */}
          <Flex vertical align="center">
            <Paragraph className="dark:text-white text-black text-[12px] 2xl:text-[18px] font-semibold ">
              {AttendanceCardData.tentative}
            </Paragraph>
            <Paragraph className="dark:text-white text-black text-xs">
              Tentative
            </Paragraph>
          </Flex>
          {/* decline */}
          <Flex vertical align="center">
            <Paragraph className="dark:text-white text-black text-[12px] 2xl:text-[18px] font-semibold ">
              {AttendanceCardData.declined}
            </Paragraph>
            <Paragraph className="dark:text-white text-black text-xs">
              Declined
            </Paragraph>
          </Flex>
        </Flex>
      </Flex>

      <Box className=" mt-4">
        <SemiGuage />
      </Box>
    </Flex>
  );
};

export default AttendanceCard;
