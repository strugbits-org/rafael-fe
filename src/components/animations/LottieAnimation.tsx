import Lottie from "lottie-react";
import { useSnapshot } from "valtio";
import state from "../../store/store";
import { WeatherCondition } from "../../@types";

// Import all weather animations
import SunnyWeatherAnimationData from "../../assets/animations/sunny-weather.json";
import CloudyWeatherAnimationData from "../../assets/animations/cloudy-weather.json";
import RainyWeatherAnimationData from "../../assets/animations/rainy-weather.json";
import SnowyWeatherAnimationData from "../../assets/animations/snowy-weather.json";
import WindyWeatherAnimationData from "../../assets/animations/windy-weather.json";

const weatherAnimations = {
  sunny: SunnyWeatherAnimationData,
  cloudy: CloudyWeatherAnimationData,
  rainy: RainyWeatherAnimationData,
  snowy: SnowyWeatherAnimationData,
  windy: WindyWeatherAnimationData,
};

interface WeatherAnimationProps {
  weatherState: WeatherCondition;
}

const WeatherAnimation: React.FC<WeatherAnimationProps> = ({
  weatherState,
}) => {
  console.log("====================================");
  console.log(weatherState);
  console.log("====================================");
  const snap = useSnapshot(state);

  const style = {
    filter: !snap.darkMode
      ? "brightness(75%) saturate(100%)"
      : "brightness(100%) saturate(100%)",
  };

  return (
    <Lottie
      animationData={weatherAnimations[weatherState]}
      loop={true}
      className="h-32"
      style={style}
    />
  );
};

export default WeatherAnimation;
