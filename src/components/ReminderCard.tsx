import { Flex } from "antd";
import { Box } from "./ui/box";
import { reminder } from "../@types";

const ReminderCard = ({ title, description, image }: reminder) => {
  return (
    <Box className="bg-[#1F1F1F] p-4 max-w-2xl shadow-md rounded-[6px]">
      <Flex vertical gap={12}>
        <h3 className=" text-white text-[14px] md:text-[15px]  xl:text-[16px] font-[600]">
          {title}
        </h3>

        <Box>
          <img
            className="w-full rounded-[10px]"
            src={image}
            alt={`Picture of ${title}`}
          />
        </Box>

        <p className=" text-white text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-[400]">
          {description}
        </p>
      </Flex>
    </Box>
  );
};

export default ReminderCard;
