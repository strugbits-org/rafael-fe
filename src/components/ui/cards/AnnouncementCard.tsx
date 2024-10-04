import { Flex } from "antd";
import { annoucements } from "../../../@types";
import { Box } from "../box";
import Paragraph from "../../common/Paragraph";

const AnnouncementCard = ({
  title,
  description,
  profilePic,
  userName,
}: annoucements) => {
  return (
    <Flex
      className="p-4 font-segoe w-full dark:bg-[#3B3B3B] bg-gray-300 rounded-[12px]"
      vertical
      gap={12}
    >
      <h5 className=" dark:text-white text-black text-[14px] md:text-[15px] xl:text-[18px] font-[700]">
        {title}
      </h5>

      <Paragraph className=" dark:text-white text-black text-[12px] md:text-[13px] xl:text-[14px] font-[400]">
        {description}
      </Paragraph>

      <Flex align="center" gap={10}>
        <Box className="w-[50px] h-[50px] rounded-full overflow-hidden">
          <img src={profilePic} alt="PROFILE_PIC" className="w-full" />
        </Box>
        <Box>
          <Paragraph className=" dark:text-white text-black text-[12px] md:text-[13px] xl:text-[14px] font-[400]">
            {userName}
          </Paragraph>
        </Box>
      </Flex>
    </Flex>
  );
};

export default AnnouncementCard;
