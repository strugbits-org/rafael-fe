import microsoftBadge from "../../assets/images/microsoft.png";
// import { PiInstagramLogo } from "react-icons/pi";
// import { SiFacebook, SiLinkedin } from "react-icons/si";

import insta from "../../assets/images/insta.png";
import fb from "../../assets/images/fbicon.png";
import linkedin from "../../assets/images/ld.png";
import Paragraph from "../common/Paragraph";
import { meetingDeatils } from "../../data";
import { Box } from "../ui/box";
import { Divider, Flex } from "antd";

const socialLinks = [
  //SOCIAL LINKS
  {
    icon: insta,
    link: "https://www.instagram.com/",
  },
  {
    icon: fb,
    link: "https://www.facebook.com/",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

const MeetingCard = () => {
  return (
    <Flex
      justify="space-between"
      wrap
      className="w-full relative bg-meetingStripBg py-5  bg-cover bg-no-repeat bg-center 2xl:px-10 px-5 rounded-[12px] h-full"
    >
      {/* =================== ORAGANISER, TITLE AND DURATION ================== */}
      <Flex align="start" gap={25} justify="space-between" vertical>
        {/* ===================ORGANIZER DEATILS================== */}
        <Flex vertical align="start" gap={20}>
          <Box className="flex items-center flex-wrap   space-x-2 gap-y-2">
            <Box className="relative">
              <img
                src={meetingDeatils.speaker.avatarUrl}
                alt={meetingDeatils.speaker.name}
                className="w-20 h-20 rounded-full"
              />
              <img
                src={microsoftBadge}
                className="absolute right-0 bottom-0 w-8"
                alt="microsoftBadge"
              />
            </Box>
            <Flex gap={10}>
              <Paragraph className="text-white text-[14px] md:text-[18px] xl:text-[20px] font-[400] leading-[1.2]">
                {meetingDeatils.speaker.name} <br />
                <span className="text-gray-200 text-[12px]   xl:text-[13.5px] font-[400]">
                  {meetingDeatils.speaker.designation}
                </span>
              </Paragraph>

              {meetingDeatils.badge?.length && (
                <Box className="flex space-x-1 pt-1">
                  {meetingDeatils.badge.map((badge, index) => (
                    <Box
                      key={index}
                      className="w-6 h-6 bg-gray-50 rounded-full overflow-hidden"
                    >
                      <img
                        className="w-full h-full object-cover"
                        src={badge}
                        alt="Badge"
                      />
                    </Box>
                  ))}
                </Box>
              )}
            </Flex>
          </Box>
        </Flex>

        {/* MEETING TITLE AND DURATION */}
        <Flex vertical align="start" gap={5}>
          <Paragraph className="text-white text-left text-[14px] md:text-[18px] lg:text-[20px]  xl:text-[24px] font-[450]">
            {meetingDeatils.meetingTitle}
          </Paragraph>

          <Flex align="center" wrap>
            <p className=" text-[13px] md:text-[14px] xl:text-[15px] font-[400] bg-[#DCFFD7] rounded-[16px] py-1 px-4 border-2 border-[#1EBD04] font-segoe text-[#1EBD04]">
              Internal meeting
            </p>
            <Divider type="vertical" className="bg-[#fff] h-4" />
            <Paragraph className="text-white text-[13px] md:text-[14px] lg:text-[15px] font-[400]">
              {meetingDeatils.duration} minutes{" "}
            </Paragraph>
          </Flex>
        </Flex>
      </Flex>
      {/* =================== DATE, TIME AND SOCIAL ICONS ================== */}
      <Flex vertical gap={20} justify="space-between" className="pt-2">
        {/* DATE  */}
        <Flex vertical gap={1}>
          <Paragraph className="text-white text-[13px] md:text-[14px] lg:text-[15px] font-[400]">
            Date
          </Paragraph>
          <Paragraph className="text-white text-[14px] md:text-[16px} lg:text-[18px] font-[400]">
            Thursday, 15 August
          </Paragraph>
        </Flex>
        {/* TIME */}
        <Flex vertical gap={1}>
          <Paragraph className="text-white text-[13px] md:text-[14px] lg:text-[15px] font-[400]">
            Meeting Time
          </Paragraph>
          <Paragraph className="text-white text-[14px] md:text-[16px} lg:text-[18px] font-[400]">
            {meetingDeatils.startTime} - {meetingDeatils.endTime}
          </Paragraph>
        </Flex>
        {/* SOCIAL ICONS */}
        <Flex gap={8}>
          {socialLinks.map((link, index) => (
            <a href={link.link} key={index} target="_blank" rel="noreferrer">
              <img
                src={link.icon}
                alt="insta"
                className="xl:w-[24px] sm:w-[20px] w-[18px]"
              />
            </a>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MeetingCard;
