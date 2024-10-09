import { Flex } from "antd";
import { useState } from "react";
import microsoftBadge from "../../assets/images/microsoft.png";
import { CiTempHigh } from "react-icons/ci";
import WeatherIcon from "../ui/WeatherIconRender";
import { participantsDataType } from "../../@types";
import ParticipantsModal from "../ui/ParticipantsModal";

const header = [
  //TABLE HEADINGs
  "Display Name",
  "Job Title",
  "Location",
  "Local Time",
  "Weather",
  "Details",
];

const ParticipantsTableView = ({
  data,
  participantsExpandView,
}: {
  data: participantsDataType[];
  participantsExpandView: boolean;
}) => {
  const [isCelsius, setIsCelsius] = useState(true);
  const tableHeight = !participantsExpandView
    ? "max-h-[350px] h-auto"
    : "h-full max-h-none";
  console.log(participantsExpandView);

  return (
    <div className="w-full  h-full overflow-hidden rounded-[10px] border border-slate-300 dark:border-[#383838] shadow-lg">
      {/* hidden-scrollbar class is defined in App.css use this class if want to hide scrollbar, if not  then use custom-scrollbar */}
      <div className={`overflow-auto ${tableHeight} hidden-scrollbar`}>
        <table className="min-w-full   ">
          {/* Table header */}
          <thead className="dark:bg-[#292929]  dark:text-white text-black sticky top-0 z-30  bg-gray-100 ">
            <tr>
              {header.map((item, index) => (
                <th
                  key={index}
                  className="px-6 py-5 text-left text-[14px] font-segoe font-medium  tracking-wider"
                >
                  {item === "Weather" ? (
                    <button
                      className="flex gap-1 items-center"
                      onClick={() => setIsCelsius(!isCelsius)}
                    >
                      Weather
                      <span className="dark:text-white font-segoe text-black  bg-[#2A85FF] rounded-[3px] w-8 h-8 flex items-center justify-center">
                        °{isCelsius ? "C" : "F"}
                      </span>
                    </button>
                  ) : (
                    item
                  )}
                </th>
              ))}
            </tr>
          </thead>
          {/* Table body */}
          <tbody className="divide-y divide-[#3A3A3A]  dark:text-[#DBDBDB] text-[14px] font-segoe text-black">
            {data.map((row) => (
              <tr key={row.id}>
                {/* Display name */}
                <td className="px-6 py-5 whitespace-nowrap">
                  <Flex
                    align="center"
                    className="flex-wrap xl:flex-nowrap"
                    gap={8}
                  >
                    {/* AVATAR with Microsoft logo */}
                    <Flex className="relative">
                      <img
                        src={row.profilePic}
                        alt={row.name}
                        className="2xl:w-14 2xl:h-14 w-10 h-10 rounded-full"
                      />
                      <img
                        src={microsoftBadge}
                        className="absolute right-0 bottom-0 w-5"
                        alt="microsoftBadge"
                      />
                    </Flex>
                    {/* NAME AND BADGEs */}
                    <Flex vertical gap={4}>
                      <Flex gap={4} wrap align="center">
                        {row.name}
                        {row.badge?.length && (
                          <Flex className="flex space-x-1 pt-1">
                            {row.badge.map((badge, index) => (
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

                      <Flex>
                        {row.organiser && (
                          <span className="text-[#2A85FF] text-[11px]">
                            Organiser
                          </span>
                        )}
                      </Flex>
                    </Flex>
                  </Flex>
                </td>

                {/* Job Title */}
                <td className="px-6 py-5 whitespace-nowrap">{row.jobTitle}</td>

                {/* Location */}
                <td className="px-6 py-5 whitespace-nowrap">
                  <Flex align="center" gap={10}>
                    <img
                      src={row.flag}
                      alt={row.location}
                      className="w-8 h-8"
                    />
                    <Flex vertical>
                      {row.location}
                      <span className="text-[10px] font-segoe dark:text-[#9F9F9F]  text-gray-500">
                        {row.timeZone}
                      </span>
                    </Flex>
                  </Flex>
                </td>

                {/* Local Time */}
                <td className="px-6 py-5 whitespace-nowrap">
                  {" "}
                  <Flex vertical>
                    {row.localTime}
                    <span className="text-[10px] font-segoe dark:text-[#9F9F9F]  text-gray-500">
                      {row.timeCalc}
                    </span>
                  </Flex>
                </td>

                {/* Weather */}
                <td className="px-6 py-5 whitespace-nowrap">
                  <Flex vertical>
                    <Flex align="center" gap={2}>
                      <CiTempHigh size={24} />
                      {!isCelsius ? row.weather.FTemp : row.weather.CTemp}°
                      {isCelsius ? "C" : "F"}
                    </Flex>
                    <Flex align="center" gap={2}>
                      <WeatherIcon condition={row.weather.condition} />

                      {row.weather.condition}
                    </Flex>
                  </Flex>
                </td>

                {/* Details */}
                <td className="px-6 py-5 whitespace-nowrap">
                  <ParticipantsModal data={row} fullWidthbtn={false} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantsTableView;
