import { Box } from "../ui/box";
import { Flex, Typography } from "antd";
const { Text } = Typography;

import { weatherData } from "../../data/DashboardData";
import { useState } from "react";
import RainyWeatherAnimation from "../animations/LottieAnimation";
import { FaTemperatureQuarter } from "react-icons/fa6";

const WeatherCard = () => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const temp =
    "°" + (isCelsius ? `${weatherData.CTemp}C` : `${weatherData.FTemp}F`); // IF CELSIUS IS TRUE THEN DISPLAY CELSIUS ELSE DISPLAY FAHRENHEIT

  return (
    <Flex
      vertical
      justify="space-between"
      className="dark:bg-[#1f1f1f] font-segoe  bg-slate-200 rounded-[12px] py-5 2xl:px-6 px-5 h-full"
    >
      <Flex justify="space-between" align="center">
        {/* WEATHER ADDRESS */}
        <Text className="dark:text-white text-black text-md">
          {weatherData.address}
        </Text>
        {/* WEATHER CONDITION */}
        <span className="flex items-center font-segoe dark:text-white text-black">
          <FaTemperatureQuarter />
          {temp} {weatherData.condition}
        </span>
      </Flex>

      {/* ANIMATION  */}
      <Box className=" flex items-center justify-center">
        <RainyWeatherAnimation />
      </Box>
      {/* TEMPERATURE CELSIUS OR FAHRENHEIT */}
      <Flex justify="space-between" gap={10} align="center">
        <Text className="dark:text-white font-segoe text-[13px] lg:text-[14px] text-black ">
          Average temperature
        </Text>
        <button
          className="flex items-center font-segoe text-[12px] 2xl:text-[14px]"
          onClick={() => setIsCelsius((prev) => !prev)}
        >
          <Text className="dark:text-white font-segoe text-black text-nowrap text-[12.5px] 2xl:text-[14px]  font-semibold pr-1">
            {isCelsius ? weatherData.CTemp : weatherData.FTemp}
          </Text>
          <Text className="dark:text-white font-segoe text-black  text-[12.5px] 2xl:text-[14px]  bg-[#2A85FF] rounded-[3px] w-8 h-8 flex items-center justify-center">
            °{isCelsius ? "C" : "F"}
          </Text>
        </button>
      </Flex>
    </Flex>
  );
};

export default WeatherCard;
