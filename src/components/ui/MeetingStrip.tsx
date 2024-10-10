import { Divider, Flex } from "antd";
import { Box } from "./box";

import microsoftBadge from "../../assets/images/microsoft.png";

import Paragraph from "../common/Paragraph";

import { meetingDeatils } from "../../data/MeetingAgendaData";

const MeetingStrip = () => {
  return (
    <Flex
      className="w-full bg-meetingStripBg bg-cover bg-no-repeat bg-center items-start py-6 xl:px-16 lg:px-10 px-5 gap-y-8 flex-wrap rounded-[12px]"
      justify="space-between"
    >
      {/* ===================MEETING DATE | MEETING TITLE  | MEETING TIME | MEETING DURATION ======================= */}
      <Flex
        align="center"
        className="justify-center sm:justify-start"
        wrap
        gap={25}
      >
        <Flex align="center" gap={25}>
          <Flex align="center" vertical>
            <h2 className="text-white font-segoeBold text-[16px] uppercase md:text-[24px] lg:text-[28px] xl:text-[32px] font-[600]">
              {meetingDeatils.month}
            </h2>
            <Paragraph className="text-white text-[14px] md:text-[20px] lg:text-[24px] xl:text-[28px] font-[400]">
              {meetingDeatils.date}
            </Paragraph>
          </Flex>

          <Divider
            type="vertical"
            className="bg-[#ffffff67] h-20 sm:block hidden"
          />
        </Flex>

        <Flex vertical align="start" gap={10}>
          {/* ===================MEETING TITLE======================= */}
          <Paragraph className="text-white text-[14px] md:text-[20px] lg:text-[24px]  xl:text-[28px] font-[400]">
            {meetingDeatils.meetingTitle}
          </Paragraph>
          {/* ===================MEETING TIME======================= */}
          <Paragraph className="text-white text-[13px] md:text-[14px] xl:text-[15px] font-[400]">
            {meetingDeatils.startTime} - {meetingDeatils.endTime} (
            {meetingDeatils.duration} minutes)
          </Paragraph>
          {/* ===================MEETING TYPE======================= */}
          <p className=" text-[13px] xl:mt-5 md:text-[14px] xl:text-[15px] font-[400] bg-[#DCFFD7] rounded-[16px] py-1 px-3 font-segoe border-[#1EBD04] text-[#1EBD04]">
            {meetingDeatils.meetingType}
          </p>
        </Flex>
      </Flex>

      {/* ===================ORGANIZER DETAILS======================= */}
      <Flex vertical align="start" gap={12}>
        <Paragraph className="text-white text-[13px] md:text-[14px] xl:text-[15px] font-[400]">
          Organizer
        </Paragraph>
        {/* ===================SPEAKER AVATAR AND MICROSOFT BADGE======================= */}
        <Box className="flex items-center  flex-wrap space-x-2">
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
          {/* ===================SPEAKER NAME======================= */}
          <Flex gap={10}>
            <Paragraph className="text-white text-[14px] md:text-[18px] xl:text-[20px] font-[400] leading-[1.2]">
              {meetingDeatils.speaker.name} <br />
              <span className="text-gray-200 text-[12px]   xl:text-[13.5px] font-[400]">
                {meetingDeatils.speaker.designation}
              </span>
            </Paragraph>

            {/* ===================SPEAKER BADGEs======================= */}
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

        {/* SOCIAL LINKS */}
        <Flex gap={8}>
          {meetingDeatils.socialLinks.map((link, index) => (
            <a href={link.link} target="_blank" rel="noreferrer" key={index}>
              <img
                src={link.icon}
                alt="social-ICON"
                className="xl:w-[24px] sm:w-[20px] w-[18px]"
              />
            </a>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default MeetingStrip;
