import { Flex } from "antd";
import { Box } from "./ui/box";
// import semperis from "../assets/images/semperis.png";
import { bestEmployee } from "../@types";
import Paragraph from "./common/Paragraph";

const BestEmployeeCard = ({ image, name }: bestEmployee) => {
  return (
    <Flex
      className="py-6 font-segoe px-16 bg-bgImageCelebration bg-cover bg-no-repeat bg-center  mx-auto"
      align="center"
      vertical
      gap={20}
    >
      <Box>
        <h4 className=" text-white text-[18px] md:text-[22px] xl:text-[28px] font-[400] text-center">
          BEST EMPLOYEE
          <br />
          <span className=" text-white text-[32px] md:text-[42px] xl:text-[52px] font-[700]">
            OF THE MONTH
          </span>
        </h4>
      </Box>

      {/* EMPLOYEE CIRCLE IMAGE */}
      <Box className="p-2 border-[#E5BA48] border-2 rounded-full">
        <Box className="rounded-full max-w-[280px] max-h-[280px] overflow-hidden">
          <img
            className="w-full "
            src={image}
            alt={`Picture of ${name}`}
            width={"100%"}
          />
        </Box>
      </Box>

      <Flex vertical gap={16} align="center">
        <h5 className=" text-white font-segoe  text-[18px] md:text-[22px] xl:text-[28px] font-[400] text-center">
          AWARDED TO
        </h5>
        <Box className="bg-[#E5BA48] p-3">
          <h6 className=" text-white text-[24px] md:text-[32px] xl:text-[40px] font-[700] text-center">
            {name}
          </h6>
        </Box>
        <Paragraph className=" text-white text-[16px] md:text-[18px] xl:text-[20px] font-[400] text-center">
          For your outstanding performance to our company
        </Paragraph>

        <Box className="max-w-[200px]">
          {/* <img src={semperis} alt="semperis" className="w-full" /> */}
          <img
            src={
              "https://static.vecteezy.com/system/resources/previews/027/127/592/original/microsoft-logo-microsoft-icon-transparent-free-png.png"
            }
            alt="MICROSOFT-LOGO"
            className="w-full"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default BestEmployeeCard;
