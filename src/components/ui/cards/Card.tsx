import { BsClock } from "react-icons/bs";
import Paragraph from "../../common/Paragraph";
import { Flex } from "antd";
import { participantsDataType } from "../../../@types";
import WeatherIcon from "../WeatherIconRender";
import ParticipantDetailsModal from "../ParticipantsModal";

const Card = ({ data }: { data: participantsDataType }) => {
  // CARD USED ON PARTICAPANTs SECTION ON DASHBOARD PAGE
  return (
    <Flex
      vertical
      className="border dark:border-[#3A3A3A] border-gray-300 shadow-md font-segoe lg:px-10  lg:py-6 py-4 px-4 rounded-lg max-w-[400px] md:max-w-[48%] lg:max-w-[400px] w-full"
    >
      {/* USER PICTURE */}
      <Flex align="center" className="mb-5">
        <img
          src={data.profilePic}
          alt={`Picture of ${data.name}`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          {/* USER NAME AND BADGES */}
          <Flex className="gap-1" wrap>
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
          <p className="dark:text-gray-400 text-[12px] text-gray-500 ">
            {data.jobTitle}
          </p>
          {/* IF ORGANISER ADD ORGANISER */}
          {data.organiser && (
            <p className="dark:text-[#2A85FF] text-[12px] text-[#2A85FF]">
              Organizer
            </p>
          )}
        </div>
      </Flex>

      <div className="space-y-3  dark:text-white text-black">
        {/* location */}
        <Flex justify="space-between" align="start">
          <Paragraph className="font-[200]">Location</Paragraph>
          <Flex vertical gap={5}>
            <Flex
              gap={10}
              align="center"
              className="flex-col sm:flex-row"
              justify="flex-end"
            >
              <img src={data.flag} className="w-5" alt="USA" />
              <Paragraph className="font-[200]">{data.location}</Paragraph>
            </Flex>
            <p className="text-[10px] lg:text-[11px] font-segoe dark:text-[#9F9F9F]  text-gray-500">
              {data.timeZone}
            </p>
          </Flex>
        </Flex>
        {/* time */}
        <Flex justify="space-between" align="start">
          <Paragraph className="font-[200]">Local time</Paragraph>
          <Flex vertical gap={5}>
            <Flex gap={10} align="center" justify="flex-end">
              <BsClock />
              <Paragraph>{data.localTime}</Paragraph>
            </Flex>
            <p className="text-[10px] lg:text-[11px] font-segoe dark:text-[#9F9F9F]  text-gray-500">
              {data.timeCalc}
            </p>
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
            <p className="text-[10px] lg:text-[11px] text-right capitalize font-segoe dark:text-[#9F9F9F]  text-gray-500">
              {data.weather.condition}
            </p>
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
