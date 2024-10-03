import { BsClock } from "react-icons/bs";
import Paragraph from "./common/Paragraph";
import { Flex } from "antd";
import { participantsDataType } from "../@types";
import WeatherIcon from "./WeatherIconRender";
import ParticipantDetailsModal from "./ParticipantsModal";

const Card = ({ data }: { data: participantsDataType }) => {
  return (
    <Flex
      vertical
      className="border dark:border-[#3A3A3A] border-gray-300 shadow-md font-segoe  p-6 rounded-lg max-w-[400px] w-full"
    >
      {/* USER NAME */}
      <Flex align="center" className="mb-5">
        <img
          src={data.profilePic}
          alt={`Picture of ${data.name}`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <Flex gap={5}>
            <h2 className="text-[16px] font-bold dark:text-white text-black">
              {data.name}
            </h2>
            {data.badge?.length && (
              <Flex className="flex space-x-1 pt-1">
                {data.badge.map((badge, index) => (
                  <Flex
                    key={index}
                    className="w-4 h-4 bg-gray-50 rounded-full overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={badge}
                      alt="Badge"
                    />
                  </Flex>
                ))}
              </Flex>
            )}
          </Flex>
          <Paragraph className="dark:text-gray-400 text-[13px] text-gray-500 ">
            {data.jobTitle}
          </Paragraph>

          {data.organiser && (
            <Paragraph className="dark:text-[#2A85FF] text-[12px] text-[#2A85FF]">
              Organizer
            </Paragraph>
          )}
        </div>
      </Flex>

      <div className="space-y-3  dark:text-white text-black">
        {/* location */}
        <Flex justify="space-between" align="start">
          <Paragraph>Location</Paragraph>
          <Flex vertical gap={5}>
            <Flex gap={10} align="center" justify="flex-end">
              <img src={data.flag} className="w-5" alt="USA" />
              <Paragraph>{data.location}</Paragraph>
            </Flex>
            <Paragraph className="text-[10px] font-segoe dark:text-[#9F9F9F]  text-gray-500">
              {data.timeZone}
            </Paragraph>
          </Flex>
        </Flex>
        {/* time */}
        <Flex justify="space-between" align="start">
          <Paragraph>Local Time</Paragraph>
          <Flex vertical gap={5}>
            <Flex gap={10} align="center" justify="flex-end">
              <BsClock />
              <Paragraph>{data.localTime}</Paragraph>
            </Flex>
            <Paragraph className="text-[10px] font-segoe dark:text-[#9F9F9F]  text-gray-500">
              {data.timeCalc}
            </Paragraph>
          </Flex>
        </Flex>
        {/* weather */}

        <Flex justify="space-between" align="start">
          <Paragraph>Temperature</Paragraph>
          <Flex vertical gap={5} justify="flex-end">
            <Flex gap={10} align="center">
              <WeatherIcon condition={data.weather.condition} />
              <Paragraph>-{data.weather.CTemp}°C</Paragraph>
            </Flex>
            <Paragraph className="text-[14px] text-right capitalize font-segoe dark:text-[#9F9F9F]  text-gray-500">
              {data.weather.condition}
            </Paragraph>
          </Flex>
        </Flex>
      </div>

      {/* button */}
      <Flex className="mt-4">
        <ParticipantDetailsModal fullWidthbtn={true} data={data} />
      </Flex>
    </Flex>
  );
};

export default Card;
