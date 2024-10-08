import { Flex } from "antd";
import { Box } from "../box";
import { reminder } from "../../../@types";
import Paragraph from "../../common/Paragraph";

const ReminderCard = ({ title, description, image }: reminder) => {
  // REMINDER CARD -> RENDERS REMINDERS DATA ON REMINDERS PAGE
  return (
    <Box className="dark:bg-[#1f1f1f] bg-slate-200 p-4  shadow-md rounded-[6px]">
      <Flex vertical gap={12} className="font-segoe">
        <h3 className="dark:text-white text-black text-[14px] md:text-[15px] xl:text-[16px] font-[600]">
          {title}
        </h3>

        <Box>
          <img
            className="w-full rounded-[10px]"
            src={image}
            alt={`Picture of ${title}`}
          />
        </Box>

        <Paragraph className="dark:text-white text-black text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-[400]">
          {description}
        </Paragraph>
      </Flex>
    </Box>
  );
};

export default ReminderCard;
