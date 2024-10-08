import { Flex } from "antd";
import React, { useState, useRef, useEffect } from "react";
import Paragraph from "../common/Paragraph";
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle click event for the dropdown items
  const clickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    item: string
  ) => {
    onClick(e, item);
    toggleDropdown();
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="w-[135px] dark:text-white relative text-black"
      ref={dropdownRef}
    >
      {/* FILTER BUTTON */}
      <button
        onClick={toggleDropdown}
        className="flex items-center text-[14px] gap-2 w-full px-4 py-2 dark:bg-[#292929] bg-gray-300 rounded-md focus:outline-none"
      >
        <IoFilter />
        <span>Filter</span>
      </button>

      {/* FILTER DROPDOWN */}
      {isOpen && (
        <Flex
          vertical
          gap={10}
          className="mt-2 dark:bg-[#292929] bg-gray-300 rounded-md shadow-lg z-40 absolute w-full"
        >
          {/* FILTERS HEADING */}
          <Flex className="border-b border-gray-700 px-4 py-2">
            <Paragraph className="text-[14px]">Filters</Paragraph>
          </Flex>

          {/* NEAR ME */}
          <Flex className="border-b border-gray-700 px-4 pb-2">
            <button
              className="text-left w-full"
              onClick={(e) => clickHandler(e, "Near Me")}
            >
              Near Me
            </button>
          </Flex>

          {/* COUNTRY */}
          <Flex className="px-4">
            <Paragraph className="text-[12px]">By Country</Paragraph>
          </Flex>

          {/* COUNTRY LIST */}
          <Flex
            gap={5}
            vertical
            align="start"
            className="px-4 overflow-y-auto max-h-[150px] pb-1"
          >
            {countries.map((country) => (
              <button
                key={country.code}
                className="text-left w-full"
                onClick={(e) => clickHandler(e, country.name)}
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
