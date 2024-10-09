import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(
    options.find((option) => option.value === defaultValue) || null
  );
  const selectRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
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
    <div className="relative w-40" ref={selectRef}>
      <button
        onClick={handleToggle}
        className="w-full px-4 py-2 font-segoe text-left dark:bg-[#292929] bg-[#d0d5db] dark:text-white text-black rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>{selectedOption ? selectedOption.label : "Continents"}</span>
        <FaChevronDown
          className={`absolute right-4 top-3 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full mt-1 dark:bg-[#292929] bg-[#d0d5db] rounded-md shadow-lg">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 dark:text-white text-black font-segoe dark:hover:bg-gray-700 hover:bg-gray-500 cursor-pointer"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
