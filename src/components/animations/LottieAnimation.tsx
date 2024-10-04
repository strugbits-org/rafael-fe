import Lottie from "lottie-react";

import { useSnapshot } from "valtio";
import state from "../../store/store";
import RainyWeatherAnimationData from "../../assets/animations/rainy-weather.json";

const RainyWeatherAnimation = () => {
  const snap = useSnapshot(state);

  const style = {
    filter: !snap.darkMode
      ? "brightness(50%) saturate(100%)"
      : "brightness(100%) saturate(100%)",
  };

  return (
    <Lottie
      animationData={RainyWeatherAnimationData}
      loop={true}
      className="h-32"
      style={style}
    />
  );
};

export default RainyWeatherAnimation;
