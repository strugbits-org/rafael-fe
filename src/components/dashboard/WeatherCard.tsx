import { Box } from "../ui/box";
import { Flex, Typography } from "antd";
const { Text } = Typography;

import { CiTempHigh } from "react-icons/ci";
import { weatherData } from "../../data/DashboardData";
import { useState } from "react";
import RainyWeatherAnimation from "../LottieAnimation";

const WeatherCard = () => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const temp =
    "°" + (isCelsius ? `${weatherData.CTemp}C` : `${weatherData.FTemp}F`);

  return (
    <Box className="dark:bg-[#1f1f1f] font-segoe  bg-slate-200 rounded-[12px] py-5 lg:px-10 px-5 h-full">
      <Flex justify="space-between" align="center">
        <Text className="dark:text-white text-black text-md">
          {weatherData.address}
        </Text>
        <span className="flex items-center font-segoe dark:text-white text-black">
          <CiTempHigh />
          {temp} {weatherData.condition}
        </span>
      </Flex>

      <Box className=" flex items-center justify-center">
        <RainyWeatherAnimation />
      </Box>
      <Flex justify="space-between" align="center">
        <Text className="dark:text-white font-segoe text-[12px] lg:text-[14px] text-black ">
          Average temperature
        </Text>
        <button
          className="flex items-center font-segoe text-[12px] lg:text-[14px]"
          onClick={() => setIsCelsius((prev) => !prev)}
        >
          <Text className="dark:text-white font-segoe text-black  font-semibold pr-1">
            {isCelsius ? weatherData.CTemp : weatherData.FTemp}
          </Text>
          <Text className="dark:text-white font-segoe text-black  font-semibold bg-[#2A85FF] rounded-[3px] w-8 h-8 flex items-center justify-center">
            °{isCelsius ? "C" : "F"}
          </Text>
        </button>
      </Flex>
    </Box>
  );
};

export default WeatherCard;
