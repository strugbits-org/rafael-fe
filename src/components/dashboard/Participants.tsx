import { Flex } from "antd";
import FilterDropdown from "../ui/FilterMenu";
import { ReactNode, useState } from "react";
import Paragraph from "../common/Paragraph";
import { IoClose } from "react-icons/io5";
import { filterCountryData, participantsData } from "../../data/DashboardData";
import { LuExpand } from "react-icons/lu";

import Card from "../ui/cards/Card";
import ParticipantsTableView from "../table/ParticipantsTableView";
import { BsListTask } from "react-icons/bs";
import CardViewIcon from "../../assets/icons/cardView";
import { useSnapshot } from "valtio";
import state from "../../store/store";

interface ViewModeButtonProps {
  children: ReactNode;
  isActive: boolean;
  onClick?: () => void;
}

const ViewModeButton = ({
  //view mode button component
  children,
  isActive,
  onClick,
}: ViewModeButtonProps) => {
  const activeClass = isActive
    ? "dark:bg-[#2A85FF] bg-[#2A85FF] border-[#2A85FF] text-white  border-[#FFFFFF4D]"
    : "[bg-gray-300] dark:bg-[#292929]  border-[#3A3A3A]";

  return (
    <button
      onClick={onClick}
      className={`flex text-[14px]  items-center font-segoe dark:text-white text-black px-4 py-2  rounded-[4px] border gap-1 ${activeClass}`}
    >
      {children}
    </button>
  );
};

const Participants = ({
  setparticipantsExpandView,
  participantsExpandView,
}: {
  setparticipantsExpandView: React.Dispatch<React.SetStateAction<boolean>>;
  participantsExpandView: boolean;
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"table" | "card">("table");

  const darkModeState = useSnapshot(state);

  const filterClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: string
  ) => {
    e.stopPropagation();
    setSelectedFilter(item);
  };

  const participantsDataFiltered = participantsData.filter((item) => {
    //data filteration based on selected filter
    if (selectedFilter) {
      return item.location.toLowerCase().includes(selectedFilter.toLowerCase());
    } else {
      return item;
    }
  });

  return (
    <Flex
      vertical
      gap={20}
      className="dark:bg-[#1f1f1f] bg-slate-200  font-segoe  rounded-[12px] py-5 lg:px-10 px-4 h-full overflow-hidden"
    >
      <Flex wrap justify="space-between" align="center" gap={10}>
        <h4 className=" dark:text-white text-black text-[16px]  md:text-[18px] lg:text-[20px] xl:text-[24px] font-[600]">
          Participants ({participantsDataFiltered.length})
        </h4>
        <Flex wrap gap={10}>
          {/* FILTER MENU */}

          <Flex align="center" gap={10}>
            {selectedFilter && (
              <Paragraph className="text-[12px] dark:bg-secondary-100  bg-gray-300 flex items-center border border-gray-500 p-2 justify-center gap-2 rounded-full font-[400]">
                {selectedFilter}{" "}
                <IoClose
                  onClick={() => setSelectedFilter(null)}
                  className=" cursor-pointer  "
                />
              </Paragraph>
            )}
            <FilterDropdown
              onClick={filterClickHandler}
              countries={filterCountryData}
            />
          </Flex>

          {/* TABLE AND CARD VIEW BUTTONS */}
          <Flex gap={10} align="center">
            <ViewModeButton
              isActive={viewMode === "table"}
              onClick={() => setViewMode("table")}
            >
              <BsListTask />
              Table
            </ViewModeButton>
            <ViewModeButton
              isActive={viewMode === "card"}
              onClick={() => setViewMode("card")}
            >
              <CardViewIcon
                color={
                  viewMode === "card"
                    ? "#fff"
                    : darkModeState.darkMode
                    ? "#fff"
                    : "#000"
                }
              />
              Cards
            </ViewModeButton>

            <button
              onClick={() => setparticipantsExpandView((prev) => !prev)}
              className="text-[18px] rounded-full dark:bg-[#292929] bg-gray-300 text-black dark:text-white p-3"
            >
              <LuExpand />
            </button>
          </Flex>
        </Flex>
      </Flex>

      {/* TABLE | CARD VIEW */}

      {participantsDataFiltered && participantsDataFiltered.length ? (
        viewMode === "table" ? (
          <ParticipantsTableView
            participantsExpandView={participantsExpandView}
            data={participantsDataFiltered}
          />
        ) : (
          <Flex
            gap={20}
            className={`flex-wrap ${
              participantsExpandView && "h-full items-start overflow-y-auto "
            }`}
          >
            {participantsDataFiltered.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </Flex>
        )
      ) : (
        // no data found
        <Paragraph className=" dark:text-white text-black text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-[400]">
          No data found
        </Paragraph>
      )}
    </Flex>
  );
};

export default Participants;
