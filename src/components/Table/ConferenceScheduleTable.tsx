import React from "react";
import {
  AgendaTableHeaderData,
  scheduleData,
} from "../../data/MeetingAgendaData";
import { Box } from "../ui/box";

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>, item: unknown) => void;
}
const ConferenceScheduleTable = ({ onClick }: Props) => {
  return (
    <Box className="border border-[#3A3A3A] w-full  h-full overflow-hidden rounded-lg  shadow-lg ">
      <Box className={`overflow-auto`}>
        <table className="min-w-full   ">
          <thead className=" dark:bg-[#292929] font-segoe bg-gray-300 sticky top-0 z-10 dark:text-white text-black">
            <tr className="text-left">
              {AgendaTableHeaderData.map((item, index) => (
                <th
                  key={index}
                  className={`${index === 0 ? "pl-5" : ""} py-6 text-left`}
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="dark:text-white text-black font-segoe">
            {scheduleData.map((item, index) => (
              <tr key={index} className="border-t border-gray-700">
                <td className="px-5 py-8 whitespace-nowrap">{item.time}</td>
                <td className="px-5 py-8 whitespace-nowrap">
                  <Box className="flex items-center space-x-2">
                    <img
                      src={item.speaker.avatarUrl}
                      alt={item.speaker.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>{item.speaker.name}</span>
                    {item.badge?.length && (
                      <Box className="flex space-x-1">
                        {item.badge.map((badge, index) => (
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
                  </Box>
                </td>
                <td className="px-5 py-8 whitespace-nowrap">{item.topic}</td>
                <td className="px-5 py-8 xl:text-[14px] text-[12px] whitespace-nowrap">
                  <span className="xl:text-[24px] md:text-[20px] text-[16px]">
                    {item.duration}
                  </span>{" "}
                  <br />
                  Minutes
                </td>
                <td className="px-5 py-8 whitespace-nowrap">
                  <button
                    onClick={(e) => onClick(e, item)}
                    className="bg-[#2A85FF] font-segoe rounded-[28px] text-white px-4 sm:px-8 lg:px-16 py-2 hover:bg-blue-600 transition-colors whitespace-nowrap"
                  >
                    View details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default ConferenceScheduleTable;
