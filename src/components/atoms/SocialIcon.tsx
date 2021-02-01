// TODO: can we do some dynamic imports for these assets?
import iconFacebook from "../../images/icon-facebook.svg";
import iconInstagram from "../../images/icon-instagram.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconYoutube from "../../images/icon-youtube.svg";
import { Platform } from "../../types/interfaces";

interface iProps {
  platform: Platform;
}

const SocialIcon: React.FC<iProps> = ({ platform }) => {
  let socialIcon = iconFacebook;
  if (platform === "instagram") {
    socialIcon = iconInstagram;
  } else if (platform === "twitter") {
    socialIcon = iconTwitter;
  } else if (platform === "youtube") {
    socialIcon = iconYoutube;
  }

  return <img src={socialIcon} alt={platform} />;
};

export default SocialIcon;
