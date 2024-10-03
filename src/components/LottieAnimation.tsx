import Lottie from "lottie-react";
import rainyWeatherAnimation from "../assets/animations/rainy-weather.json";
import state from "../store/store";
import { useSnapshot } from "valtio";

const RainyWeatherAnimation = () => {
  const snap = useSnapshot(state);

  const style = {
    filter: !snap.darkMode
      ? "brightness(50%) saturate(100%)"
      : "brightness(100%) saturate(100%)",
  };

  return (
    <Lottie
      animationData={rainyWeatherAnimation}
      loop={true}
      className="h-32"
      style={style}
    />
  );
};

export default RainyWeatherAnimation;
