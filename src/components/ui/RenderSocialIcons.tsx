import { socialIconType } from "../../@types";
import FacebookIcon from "../../assets/icons/facebook";
import InstaIcon from "../../assets/icons/insta";
import LinkedinIcon from "../../assets/icons/linkedin";

interface RenderSocialIconsProps {
  type: socialIconType;
  color: string;
}

const RenderSocialIcons: React.FC<RenderSocialIconsProps> = ({
  type,
  color = "#fff",
}) => {
  switch (type) {
    case "facebook":
      return <FacebookIcon color={color} />;
    case "instagram":
      return <InstaIcon color={color} />;
    case "linkedin":
      return <LinkedinIcon color={color} />;
    default:
      return null;
  }
};

export default RenderSocialIcons;
