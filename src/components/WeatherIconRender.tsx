import React from "react";
import { WiDaySunny, WiCloudy, WiRain, WiCloudyWindy } from "react-icons/wi";
import { WeatherCondition } from "../@types";
import { IoMdSnow } from "react-icons/io";

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: number;
  color?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({
  condition,
  size = 24,
  color = "currentColor",
}) => {
  const iconProps = { size, color };

  switch (condition.toLocaleLowerCase()) {
    case "sunny":
      return <WiDaySunny {...iconProps} />;
    case "cloudy":
      return <WiCloudy {...iconProps} />;
    case "rainy":
      return <WiRain {...iconProps} />;
    case "snowy":
      return <IoMdSnow {...iconProps} />;
    case "windy":
      return <WiCloudyWindy {...iconProps} />;
    default:
      return null;
  }
};

export default WeatherIcon;
