import { Flex } from "antd";
import React, { useState } from "react";
import Paragraph from "./common/Paragraph";
import { IoFilter } from "react-icons/io5";

interface Country {
  name: string;
  code: string;
}

interface FilterDropdownProps {
  countries: Country[];
  onClick: (e: React.MouseEvent<HTMLButtonElement>, item: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  countries,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const clickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: string
  ) => {
    onClick(e, item);
    toggleDropdown();
  };

  return (
    <div className="w-[135px]    dark:text-white relative text-black">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-[14px]  gap-2 w-full px-4 py-2 dark:bg-[#292929] bg-gray-300 rounded-md focus:outline-none"
      >
        <IoFilter />

        <span>Filters</span>
      </button>
      {isOpen && (
        <Flex
          vertical
          gap={10}
          className="mt-2 dark:bg-[#292929] bg-gray-300 rounded-md shadow-lg z-40 absolute w-full "
        >
          <Flex className="border-b border-gray-700 px-4 py-2">
            <button onClick={(e) => clickHandler(e, "Near Me")}>Near Me</button>
          </Flex>

          <Flex className="px-4 ">
            <Paragraph className="text-[12px]">By Country</Paragraph>
          </Flex>
          <Flex
            gap={5}
            vertical
            align="start"
            className="px-4  overflow-y-auto max-h-[100px]  pb-1"
          >
            {countries.map((country) => (
              <button
                onClick={(e) => clickHandler(e, country.name)}
                key={country.code}
              >
                {country.name}
              </button>
            ))}
          </Flex>
        </Flex>
      )}
    </div>
  );
};

export default FilterDropdown;
