import { WiDaySunny, WiCloudy, WiRain, WiCloudyWindy } from "react-icons/wi";
import { WeatherCondition } from "../../@types";
import { IoMdSnow } from "react-icons/io";

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: number;
  color?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({
  //RENDERING WEATHER ICONS BASED ON THE WEATHER CONDITION USED ON PARTICIPANTS CARD | PARTICIPANTS TABLE ADD MORE ICONS AND CONDITIONS IF NEEDED AND UPDATE THE TYPES IN @types
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
